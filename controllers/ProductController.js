const { Product , User } = require('../models')

class ProductController{

    static findAll(req,res,next){
        Product.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }

    static findOne(req,res,next){
        Product.findOne({
            where:{
                id: req.params.id
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

    static addProduct(req,res,next){
        var obj = {
            name: req.body.name,
            descriptions: req.body.descriptions,
            imageurl: req.body.imageurl,
            price: req.body.price,
            stock: req.body.stock
        }
        Product.create(obj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
            // res.status(400)
        })
    }

    // static updateProduct(req,res){
    //     Product.findByPk(req.params.id)
    //     .then(data => {
    //         res.status(200).json(data)
    //     })
    //     .catch(err => {
    //         next(err)
    //         // res.status(404)
    //     })
    // }

    static updateProduct(req,res){
        var obj = {
            name: req.body.name,
            descriptions: req.body.descriptions,
            imageurl: req.body.imageurl,
            price: req.body.price,
            stock: req.body.stock
        }

        Product.update(obj,{where: {id:req.params.id}})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            // res.status(400)
        })
    }

    static delete(req,res){
        Product.destroy({where: {id:req.params.id}})
        .then(data => {
            res.status(200).json({message: "Product deleted"})
        })
        .catch(err => {
            next(err)
            // res.status(500).json({message: err.message})
        })
    }

}

module.exports = ProductController