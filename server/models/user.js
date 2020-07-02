'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  
  User.addHook('beforeCreate', (instance,options) => {
    instance.role = 'customer'
  })

  User.associate = function(models) {
    User.hasMany(models.Cart);
  };
  return User;
};