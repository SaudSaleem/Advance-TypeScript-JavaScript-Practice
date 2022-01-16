'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contactInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contactInfo.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  };
  contactInfo.init({
    phoneNo: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contactInfo',
  });
  return contactInfo;
};