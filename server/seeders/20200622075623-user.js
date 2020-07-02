'use strict';
const {encrypt} = require('../helpers/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fields = [{
      "email" : "admin@mail.com",
      "password" : encrypt("admin1234"),
      "role" : "admin",
      createdAt : new Date(),
      updatedAt : new Date()
  },{
    "email" : "customer@mail.com",
    "password" : encrypt("customer1234"),
    "role" : "customer",
    createdAt : new Date(),
    updatedAt : new Date()
}];
return queryInterface.bulkInsert('Users', fields, {})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {})
  }
};
