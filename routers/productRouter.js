const router = require('express').Router()
const ProductController = require('../controllers/ProductController')
const {authentication, authorization} = require('../middlewares/auth')

router.get('/', ProductController.findAll)

router.use(authentication)

router.get('/:id', ProductController.findOne)

router.post('/', authorization, ProductController.addProduct)

router.put('/:id', authorization, ProductController.updateProduct)

router.delete('/:id', authorization, ProductController.delete)

module.exports = router