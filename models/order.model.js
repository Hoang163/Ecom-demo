// models/order.model.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Order', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      total_price: DataTypes.FLOAT,
      date: DataTypes.DATE,
      status: DataTypes.STRING
    });
  };