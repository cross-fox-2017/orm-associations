'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  //   return queryInterface.createTable('Student_Teacher', {
  //   id: {
  //     allowNull: false,
  //     autoIncrement: true,
  //     primaryKey: true,
  //     type: Sequelize.INTEGER
  //   },
  //   teacherId: Sequelize.INTEGER,
  //   studentId: Sequelize.INTEGER
  //  });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    // return queryInterface.dropTable('student_teacher');
  }
};
