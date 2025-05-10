// models/feedback.model.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Feedback', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      comment: DataTypes.TEXT,
      rate_star: DataTypes.INTEGER
    });
  };