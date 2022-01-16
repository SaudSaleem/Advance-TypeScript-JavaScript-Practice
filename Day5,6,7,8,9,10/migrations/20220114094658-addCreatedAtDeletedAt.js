'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     queryInterface.addColumn('UserOrder', 'updatedAt', Sequelize.DATE,
      {
        defaultValue: Sequelize.DataTypes.NOW
      }
     ).then(() => {
      queryInterface.addColumn('UserOrder', 'createdAt',Sequelize.DATE, {
        defaultValue: Sequelize.DataTypes.NOW
      })
     })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
