const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { encrypt } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {

  static testlogin(req, res, next) {
    console.log('masuktest')
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email: email
      }
    })
      .then(response => {
        if (response) {
          if (comparePassword(password || '', response.password)) {
            const payload = {
              id: response.id,
              email: response.email,
              role: response.role
            };
            const role = payload.role
            const access_token = generateToken(payload);
            res.status(200).json({
              // message: 'Login Success'
              access_token, role
            });
          } else {
            next({
              status: 401,
              message: 'Invalid email or password'
            });
          }
        } else {
          next({
            status: 401,
            message: 'Invalid email or password'
          });
        }
      })
      .catch(err =>
        console.log(err)
        // next(err));
      )
    }

    static register(req,res,next){
      const newUser = {
          email : req.body.email,
          password : encrypt(req.body.password)
      }

      User.create(newUser)
      .then(data => {
          res.status(201).json({email: data.email, role: data.role})
      })
      .catch(err => {
          console.log(err)
          res.status(400).json(err)
      })
  }
}
module.exports = UserController