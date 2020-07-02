const { Cart, User, Product } = require('../models')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

class CartController {

    static findCart(req, res, next) {
        var access_token = req.headers.access_token
        var decode = jwt.verify(access_token, process.env.SECRET)
        var userId = decode.id

        Cart.findAll({
            where: {
                UserId: userId
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
                next(err)
                // res.status(500)
            })
    }

    static addCart(req, res, next) {
        var access_token = req.headers.access_token
        var decode = jwt.verify(access_token, process.env.SECRET)
        var productId = req.body.productId
        var userId = decode.id

        Product.findOne({
            where: {
                id: productId
            }
        })
            .then(data => {
                if (data.stock > 0) {
                    Cart.findOne({
                        where: {
                            UserId: userId,
                            name: data.name
                        }
                    })
                        .then(data => {
                            var obj = {
                                UserId: userId,
                                name: data.name,
                                descriptions: data.descriptions,
                                imageurl: data.imageurl,
                                price: data.price,
                                stock: data.stock,
                                quantity: (data.quantity + 1)
                            }

                            Cart.update(obj, { where: { id: data.id } })
                                .then(data => {
                                    res.status(201).json(data)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        })
                        .catch(err => {
                            console.log(err)
                            var obj = {
                                UserId: userId,
                                name: data.name,
                                descriptions: data.descriptions,
                                imageurl: data.imageurl,
                                price: data.price,
                                stock: data.stock,
                                quantity: (data.quantity + 1)
                            }

                            Cart.create(obj)
                                .then(data => {
                                    res.status(201).json(data)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        })
                }
                else {
                    res.status(400).json({ message: "Stock Habis" })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    static delete(req, res) {
        Cart.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.status(200).json({ message: "Cart deleted" })
            })
            .catch(err => {
                console.log(err)
            })
    }

    static checkout(req, res, next) {
        var access_token = req.headers.access_token
        var decode = jwt.verify(access_token, process.env.SECRET)
        var userId = decode.id

        Cart.findAll({
            where: {
                UserId: userId
            }
        })
            .then(data => {
                data.map(el =>
                    Product.findOne({
                        where: {
                            name: el.name
                        }
                    })
                        .then(res => {
                            var obj = {
                                name: res.name,
                                descriptions: res.descriptions,
                                imageurl: res.imageurl,
                                price: res.price,
                                stock: (res.stock - el.quantity)
                            }
                            Product.update(obj, { where: { id: res.id } })
                        })
                )

            })
            .then(data => {
                {
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'akuntesting112233@gmail.com',
                            pass: 'AkunTesting1.'
                        }
                    })
                    let mailOption = {
                        from: 'akuntesting112233@gmail.com',
                        to: 'akuntesting112233@gmail.com',
                        subject: 'Cart Checked Out',
                        text: 'Your Cart Checked Out! Thanks for shopping with us! Waiting for your payment'
                    }
                    transporter.sendMail(mailOption, (err, data) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log('email sent')
                        }
                    })
                }
            })
            .then(data => {
                return Cart.destroy({
                    where:
                        { UserId: userId }
                })
            })
            .then(data => {
                res.status(200).json({message: 'Data deleted, cart checked out'})
            })
            .catch(err => {
                console.log(err)
            })
    }

}

module.exports = CartController