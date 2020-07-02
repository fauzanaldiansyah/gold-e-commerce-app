const request = require('supertest');
const app = require('../app')
const { User, sequelize, Product } = require('../models')
const { queryInterface } = sequelize
const {encrypt} = require('../helpers/bcrypt')

beforeAll(done => {
  User.create({
    "email": "admin@mail.com",
    "password" : encrypt("admin1234"),
    "role": "admin",
  })
     .then(() => {done()
    })
    .catch(err => {
      done(err)
    })
})

afterAll(done => {
  queryInterface
    .bulkDelete('Users', {})
    .then(() => done())
    .catch(err => done(err))
})



describe('Post Login', function() {
    it('responds with message', function(done) {
      request(app)
        .post('/users/login')
        .send({email: 'admin@mail.com', password: 'admin1234'})
        .set('Accept', 'application/json')
        .then(response  => {
          // console.log(response, 'responselogin')
            const {body, status} = response
            expect(status).toBe(200)
            expect(body).toHaveProperty('access_token', expect.any(String))
            done()
        });
    });
  });

describe('Wrong Email', function() {
    request(app)
        .post('/users/login')
        .send({email: 'admin@email.com', password: 'admin1234'})
        .then(response => {
            const { body, status } = response;
            expect(status).toBe(401);
            expect(body).toHaveProperty('message', ['Invalid email or password']);
            done()
        });
});

describe('Wrong Password', function() {
  request(app)
      .post('/users/login')
      .send({email: 'admin@mail.com', password: '1234'})
      .then(response => {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toHaveProperty('message', ['Invalid email or password']);
          done()
      });
});