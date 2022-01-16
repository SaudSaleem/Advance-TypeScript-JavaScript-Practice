"use strict";
const { Model } = require("sequelize");
//const userBackupTable = require("../models").userBackUpTable;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.bankInfo, {
        foreignKey: "userId",
      });
      User.hasMany(models.contactInfo, {
        foreignKey: "userId",
      });
      User.belongsToMany(models.order, { through: 'UserOrder',foreignKey: 'OrderId'} );
    }
  }
  User.init(
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
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
  // Method 2 via the .addHook() method
  User.addHook("afterCreate", (user, options) => {
    sequelize.models.userBackUpTable.create({
      userId: user.dataValues.id.toString(),
    });
  });
  return User;
};
