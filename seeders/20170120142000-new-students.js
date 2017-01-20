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
        name:'asoy',
        email:'bang@yahoo.com',
        phone:'081232425433',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'geboy',
        email:'bango@yahoo.com',
        phone:'081232425433',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'ngebud',
        email:'bangos@yahoo.com',
        phone:'0812324254332',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'dijalana',
        email:'bangi@yahoo.com',
        phone:'0812324254332',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'ibnu',
        email:'bange@yahoo.com',
        phone:'0812324254332',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'kotza',
        email:'bangz@yahoo.com',
        phone:'0812324254332',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'bao',
        email:'bao@yahoo.com',
        phone:'0812324254332',
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
  }
};
