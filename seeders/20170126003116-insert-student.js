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
        name:'Irwin Pratajaya',
        email:'irwin@pratajaya.com',
        phone:'08124613412',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Muahammad Iqbal',
        email:'iqbal@pratajaya.com',
        phone:'08121511242',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Endy Santoso',
        email:'endy@pratajaya.com',
        phone:'0812471471414',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mangku Widodo',
        email:'mangku@pratajaya.com',
        phone:'081212322222',
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
