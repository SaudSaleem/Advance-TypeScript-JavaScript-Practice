'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bankInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bankInfo.belongsTo(models.User, {
        foreignKey: 'userId',
        as:"userBankInfo"
        
      });
    }
  };
  bankInfo.init({
    bankName: DataTypes.STRING,
    accountNo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bankInfo',
    tableName: 'bankInfo'
  });
  return bankInfo;
};