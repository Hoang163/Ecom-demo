// models/voucher.model.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Voucher', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      code: DataTypes.STRING,
      discount: DataTypes.FLOAT,
      status: DataTypes.STRING
    });
  };
  