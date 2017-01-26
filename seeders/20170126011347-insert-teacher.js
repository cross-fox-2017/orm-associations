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
    return queryInterface.bulkInsert('Teachers',[
      {
        name:'Windiana Krismanuyar',
        email:'windi@pratajaya.com',
        phone:'08123456789',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Rubi Henjaya',
        email:'rubi@pratajaya.com',
        phone:'081212121212',
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
