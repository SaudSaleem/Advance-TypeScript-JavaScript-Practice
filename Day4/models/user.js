"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(
        models.bankInfo,
        {
          foreignKey: 'userId'
        }
      )
    }
  }
  User.init(
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        unique: true,
      },
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  console.log("isers", User);
  return User;
};
