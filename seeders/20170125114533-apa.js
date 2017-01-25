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
        name:'Mahmud',
        email:'mamud@yahoo.com',
        phone:'089694026806',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Rahmad',
        email:'amad@yahoo.com',
        phone:'089694026806',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Sarifudin',
        email:'sarif@yahoo.com',
        phone:'089694026806',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Maulidy',
        email:'maumau@yahoo.com',
        phone:'089694026806',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Kuntoro',
        email:'kun21@yahoo.com',
        phone:'089694026806',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Laili',
        email:'elel00@yahoo.com',
        phone:'089694026806',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Iqbal',
        email:'qbol@yahoo.com',
        phone:'089694026806',
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
