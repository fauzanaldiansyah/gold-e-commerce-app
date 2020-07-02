if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routers')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(routes)
app.use(errorHandler)

// console.log(process.env.NODE_ENV, '<<')

// if(process.env.NODE_ENV == 'development'){
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
// }

module.exports = app