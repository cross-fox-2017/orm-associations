'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Students",[
      {
        name:"budi",
        email:"budi@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budit",
        email:"budit@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budir",
        email:"budir@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budiw",
        email:"budiw@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budis",
        email:"budis@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budic",
        email:"budic@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budin",
        email:"budin@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budim",
        email:"budim@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"budig",
        email:"budig@email.com",
        phone:"12345678910",
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
