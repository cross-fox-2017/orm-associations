"use strict"

const db = require('./models')
const faker = require('faker')

//test association
// db.Student.findById(3).then(function(student){
//   db.Teacher.findById(student.dataValues.TeacherId).then(function(teacher){
//     console.log(teacher.dataValues);
//   });
// })
// function createDummy(number) {
//   for (let i = 0; i < number; i++){
//     db.Student.bulkCreate([
//       {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), phone: '1234567891012', height: 150},
//       {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), phone: '1234567891012', height: 150},
//       {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), phone: '1234567891012', height: 150},
//       {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05'), phone: '1234567891012', height: 150},
//     ])
//   }
// }
// createDummy(5)
//
// db.Teacher.bulkCreate( [
//     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()},
//     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()},
//     {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}, {name: faker.name.findName(), phone: '1234567891012', email:faker.internet.email()}
//   ])
function matching() {
  for (let j = 1; j < 21; j++){
    db.Student_Teacher.create({
      teacherId: Math.ceil(Math.random()*9),
      studentId: j
    })
  }
}
// matching()

function teacherOf(studentId) {
  db.Student.findOne({
    where: {
      id: studentId
    },
    attributes: ['id', 'firstName']
  }).then((student) => {
    console.log(`Teacher(s) Of ${student.dataValues.firstName} :`);
    db.student_teacher.findAll({
      where: {
        StudentId: student.dataValues.id
      },
      attributes: ['teacherId']
    }).then((teacher) => {
      for (var i = 0; i < teacher.length; i++) {
        db.Teacher.findAll({
          where: {
            id: teacher[i].dataValues.teacherId
          },
          attributes: ['name']
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].dataValues.name);
          }
        })
      }
    })
  })
}

function studentOf(teacherId) {
  db.Teacher.findOne({
    where: {
      id: teacherId
    },
    attributes: ['id', 'name']
  }).then((teacher) => {
    console.log(`Student(s) Of ${teacher.dataValues.name} :`);
    db.student_teacher.findAll({
      where: {
        teacherId: teacher.dataValues.id
      },
      attributes: ['studentId']
    }).then((student) => {
      for (var i = 0; i < student.length; i++) {
        db.Student.findAll({
          where: {
            id: student[i].dataValues.studentId
          },
          attributes: ['firstName']
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].dataValues.firstName);
          }
        })
      }
    })
  })
}

teacherOf(8)
studentOf(3)
