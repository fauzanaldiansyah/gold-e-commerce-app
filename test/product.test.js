const request = require('supertest');
const app = require('../app')
const jwt = require('jsonwebtoken')
const { User, sequelize, Product } = require('../models')
const { queryInterface } = sequelize

let userToken = ''
const userData = { email: 'admin@mail.com', password: 'admin1234', role: 'admin' }


beforeAll(done => {
  User.create(userData)
    .then(user => {
      userToken = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.SECRET)
      done()
    })
    .catch(err => {
      done(err)
    })
})

afterAll(done => {
  queryInterface
    .bulkDelete('Users', {})
    .then(() => queryInterface.bulkDelete('Products', {}))
    .then(() => done())
    .catch(err => done(err))
})


describe('Get All Products', function () {
  it('responds with message', function (done) {
    request(app)
      .get('/products')
      .set('access_token', userToken)
      .set('Accept', 'application/json')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(Array.isArray(body)).toBeTruthy();
        done()
      });
  });
});


describe('Add Product', function () {
  it('responds with message', function (done) {
    request(app)
      .post('/products')
      .send(
        {
        name: 'Emas 2g',
        descriptions: 'Good, 2g',
        imageurl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-2610146/antam_makaioshop---emas-antam-logam-mulia--2-g-_full02.jpg?output-format=webp',
        price: '1910000',
        stock: 100,
      })
      .set('access_token', userToken)
      .set('Accept', 'application/json')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(201)
        expect(body).toHaveProperty('name', 'Emas 2g')
        done()
      });
  });
});

describe('Get Products for Edit', function () {
  it('responds with message', function (done) {
    request(app)
      .get('/products/find/1')
      // .send({ params: 1 })
      .set('access_token', userToken)
      .set('Accept', 'application/json')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        done()
      });
  });
});

describe('Edit Products', function () {
  it('responds with message', function (done) {
    request(app)
      .put('/products/1')
      .send({
        name: 'Emas 2g',
        descriptions: 'New and Good, 2g',
        imageurl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-2610146/antam_makaioshop---emas-antam-logam-mulia--2-g-_full02.jpg?output-format=webp',
        price: '2000000',
        stock: 50
      })
    .set('access_token', userToken)
    .set('Accept', 'application/json')
    .then(response => {
      const { body, status } = response
      expect(status).toBe(200)
      done()
    });
  });
});

describe('Delete Products', function () {
  it('responds with message', function (done) {
    request(app)
    .delete('/products/1')
    .set('access_token', userToken)
    .set('Accept', 'application/json')
    .then(response => {
      const { body, status } = response
      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'Product deleted')
      done()
    });
  });
});
