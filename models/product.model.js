// models/product.model.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.STRING,
      total: DataTypes.INTEGER,
      image: DataTypes.STRING
    });
  };