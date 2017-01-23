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
    return queryInterface.bulkInsert('Students',[
      {
        name:'Muhammad Iqbal',
        email:'iqbal@gmail.com',
        phone:'0818247681923',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Yoma Sofwan',
        email:'yoma@yahoo.com',
        phone:'08486249823',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Irwin Pratajaya',
        email:'irwin@gmail.com',
        phone:'081186238121',
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
