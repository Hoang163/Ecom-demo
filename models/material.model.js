// models/material.model.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Material', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    });
  };
  