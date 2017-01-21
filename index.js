"use strict"

const db = require('./models')
const faker = require('faker')

//test association
// db.Student.findById(3).then(function(student){
//   db.Teacher.findById(student.dataValues.TeacherId).then(function(teacher){
//     console.log(teacher.dataValues);
//   });
// })

// db.Student.bulkCreate([
//   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150},
//   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150},
//   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150},
//   {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), TeacherId: Math.floor(Math.random()*20+1), phone: '1234567891012', height: 150}
// ])
//
// db.Teacher.bulkCreate( [
//     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()},
//     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()},
//     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}
//   ])
