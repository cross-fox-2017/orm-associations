'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Students',
      'TeacherId',
      {
        type: Sequelize.INTEGER,
        references: {model: 'Teachers', key: 'id'}
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Students',
      'TeacherId'
    )
  }
};
