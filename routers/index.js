const router = require('express').Router()
const userRoutes = require('./userRouter')
const productRoutes = require('./productRouter')
const cartRoutes = require('./cartRouter')

router.get ('/', (req,res) => { 
    res.json({msg:"Hello!"})
})

router.use('/users', userRoutes)

router.use('/products', productRoutes)

router.use('/carts', cartRoutes)

module.exports = router