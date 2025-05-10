module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_num: DataTypes.STRING,
      dob: DataTypes.DATE,
      avatar: DataTypes.STRING,
      role: DataTypes.STRING
    });
  };
  