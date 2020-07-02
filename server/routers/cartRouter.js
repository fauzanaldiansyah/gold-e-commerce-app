const router = require('express').Router()
const CartController = require('../controllers/CartController')

router.post('/add', CartController.addCart)

router.get('/find', CartController.findCart)

router.delete('/:id', CartController.delete)

router.post('/checkout', CartController.checkout)

module.exports = router