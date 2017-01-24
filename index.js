"use strict"

const db = require("./models")

//Contoh data guru yang valid:
// db.Teacher.create({name: 'M Haidar Hanif', email: 'mhaidar@gmail.com', phone: '087880551650'})
//   .then(function(teacher) {
//     console.log(teacher);
// })
//
// db.Teacher.create({name: 'Riza Fahmi', email: 'riza@yahoomail.com', phone: '08128231512'})
//   .then(function(teacher) {
//     console.log(teacher);
// })
//
// db.Teacher.create({name: 'Windiana Krismanuyar', email: 'windi@gmail.com', phone: '08123456789'})
//   .then(function(teacher) {
//     console.log(teacher);
// })

// db.Teacher.create({name: 'Izumi Karina', email: 'karina@gmail.com', phone: '08159070289'})
//   .then(function(teacher) {
//     console.log(teacher);
// })

//Contoh data guru yang TIDAK valid:
// db.Teacher.create({name: 'Rubi Henjaya', email: 'rubihotmail.com', phone: '081234567'})
//   .then(function(teacher) {
//     console.log(teacher);
// })

//Contoh data (email, height, phone) yang valid:
// db.Student.create({
//   first_name:'isumi', last_name:'zumi', birthdate:'1989-02-07', email:'isumizumi@gmail.com', phone:'081234567890'
// }).then(function(data) {
//   console.log("Success record data");
// })

//Contoh data (email, height, phone) yang tidak valid:
// db.Student.create({
//   first_name:'karina', last_name:'isumi', birthdate:'1989-01-01', email:'isumi_karina@yahoo.co.id', height:100, phone:'081234567'
// }).then(function(data) {
//   console.log("Success record data", data);
// })

// db.Student.getAllData()
// var all = db.Student.getAllData(function(students){
//   students.forEach(function(student) {
//     console.log("ID: "+student.id)
//     console.log("First Name: "+student.first_name)
//     console.log("Last Name: "+student.last_name)
//     console.log("Full Name: "+student.full_name)
//     console.log("Age: "+student.age)
//   })
// })

class Student {
  constructor () {}
//
  static findStudents(teacherId){
    db.Teacher.findById(teacherId).then(function(get){
      get.getStudents().then(function(data){
        data.forEach(function(data){
          console.log(`Student ID: ${data.id}\nName: ${data.name}`);
        })
      })
    })
  }

  static findTeachers(studentId){
    db.Student.findById(studentId).then(function(get){
      // console.log("------1",get);
      get.getTeachers().then(function(data){
        // console.log("---2", data);
        data.forEach(function(data){
          console.log(`Teacher ID: ${data.id}\nName: ${data.name}`);
        })
      })
    })
  }

  static validateData(){
    db.Student.create(
      {name: "Isumizumi", email: "isumizumi@gmail.com", phone: "08159070289"})
      .then(function(data){
      console.log(":: Record Data is Valid ::")
    }).catch(function(err){
      console.log(err);
    })

    db.Teacher.create(
      {name: "Windian", email: "windi@gmail.com", phone: "0811223344"})
      .then(function(data){
      console.log(":: Record Data is Valid ::")
    }).catch(function(err){
      console.log(err);
    })
  }
  //First Running!
  static checkData(){
    db.Teacher.findById(1).then(function(teacher){
      db.Student.findById(1).then(function(student){
        student.setTeachers(teacher)
      })
    })
    db.Teacher.findById(1).then(function(teacher){
      db.Student.findById(2).then(function(student){
        student.addTeachers(teacher)
      })
    })
  }
}


Student.findStudents(1)
Student.findTeachers(1)
// Student.validateData()
// Student.checkData()
