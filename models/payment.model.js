module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Payment', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      method: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      date: DataTypes.DATE
    });
  };