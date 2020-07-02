'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
 
  Cart.addHook('beforeCreate', (instance,options) => {
    instance.quantity = 1
  })

  Cart.associate = function(models) {
    Cart.belongsTo(models.User)
  };
  return Cart;
};