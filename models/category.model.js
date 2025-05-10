// models/category.model.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    });
  };
  