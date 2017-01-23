'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Student-Teachers',[
      {
        teacherid: 1,
        studentid:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        teacherid: 1,
        studentid:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        teacherid: 1,
        studentid:3,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        teacherid: 2,
        studentid:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        teacherid: 2,
        studentid:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        teacherid: 2,
        studentid:3,
        createdAt:new Date(),
        updatedAt:new Date()
      },
    ],{})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Student-Teachers', null, {});
  }
};
