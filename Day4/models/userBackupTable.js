"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userBackUpTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userBackUpTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "userBackUpTable",
      tableName: "userBackUpTable",
      timestamps: false
    }
  );
  return userBackUpTable;
};
