'use strict';
const faker = require('faker')
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
    // return queryInterface.bulkInsert('Students', [
    //   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150},
    //   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150},
    //   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150},
    //   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150}
    // ], {})
    // .then(function(){
    //   queryInterface.bulkInsert('Teachers', [
    //     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()},
    //     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()},
    //     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}
    //   ], {})
    // })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {}).then(function(){
      queryInterface.bulkDelete('Teacher', null, {})
    })

  }
};
