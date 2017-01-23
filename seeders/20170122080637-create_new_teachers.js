'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Teachers",[
      {
        name:"hasan",
        email:"hasan@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hason",
        email:"hason@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hasin",
        email:"hasin@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hasen",
        email:"hasen@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hasun",
        email:"hasun@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hasno",
        email:"hasno@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hasnu",
        email:"hasnu@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hasuin",
        email:"hasuin@email.com",
        phone:"12345678910",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"komar",
        email:"komar@email.com",
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
