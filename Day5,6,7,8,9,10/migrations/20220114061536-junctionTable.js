module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'UserOrder',
      {
        OrderId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        UserId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('UserOrder');
  },
};