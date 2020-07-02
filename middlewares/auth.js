const jwt = require('jsonwebtoken')
const { Product , User } = require('../models')

const authentication = (req, res, next) => {
    const {access_token} = req.headers
    console.log(access_token, 'access_token')
    if(!access_token){
        next({name : 'TOKEN_ERROR'})
        // res.status(404).json({message: "Token not found"})
    }
    else{
        var decode = jwt.verify(access_token, process.env.SECRET)
        req.userData = decode
        console.log(req.userData)
        User.findByPk(req.userData.id)
        .then(data => {
            if(!data){
                next({ name : "NOT_FOUND_ERROR", message: "User not found" })
                // res.status(404).json({message : 'User Not found'})
            }
            else{
                next()
            }
        })
        .catch(err => {
            console.log("invalid user")
            next({ name: "AUTHENTICATION_FAILED" })
            // res.status(401).json({message : err.message})
        })
    }
}

const authorization = (req, res, next) => {
    const userData = req.userData
    
    if(userData.role !== 'admin'){
        next({ name: 'NOT_FOUND_ERROR' , message: `You don't have access`})
    }
    else{
        next()
    }
    // .then(data => {
    //     console.log(data.UserId, userData,'<<<data')
    //     if(!data){
    //         next({ name: 'NOT_FOUND_ERROR' , message: 'Data Product Not Found'})
    //         // res.status(404).json({message : 'Data Product Not Found'})
    //     } else if(data.role !== 'admin'){
    //         next({ name: 'NOT_FOUND_ERROR' , message: `You don't have access`})
    //         // res.status(403).json({message : 'You dont have access'})
    //     } else {
    //         next()
    //     }
    // })
    // .catch(err => {
    //     next({ name: 'NOT_FOUND_ERROR' , message: 'Data Product Not Found'})
    //     // res.status(500).json({message : err.message})
    // })

}

module.exports = {authentication, authorization}