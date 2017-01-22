"use strict"
var db = require("./models");

class StudentTeacher {
  constructor() {

  }

  static findStudents(teacherId){
    db.Teacher.findById(teacherId).then(function(get){
      get.getStudents().then(function(data){
        data.forEach(function(data){
          console.log(`student id: ${data.id}, name: ${data.name}`);
        })
      })
    })
  }

  static findTeacher(studentId){
    db.Student.findById(studentId).then(function(get){
      get.getTeachers().then(function(data){
        data.forEach(function(data){
          console.log(`Teacher Id : ${data.id} name : ${data.name}`);
        })
      })
    })
  }

  static checkValidate(){
    //Test code for validate email & phone (students)
    db.Student.create({
      name:"Eri",email:"ery@email.com", phone:"08577733264"
    }).then(function(data){
      console.log("Adding Data")
    }).catch(function(e){
      console.log(e.message);
    })

    //Test code for validate email & phone (teachers)
    // db.Teacher.create({
    //   name:"hasan",email:"hasan@email.com", phone:"08577733264"
    // }).then(function(data){
    //   console.log("Adding Data")
    // }).catch(function(e){
    //   console.log(e.message);
    // })
  }

  static checkRelation(){
    //Driver test code for inseret
    db.Teacher.findById(9).then(function(teacher){
      db.Student.findById(9).then(function(student){
        student.setTeachers(teacher)
      })
    })

    db.Teacher.findById(2).then(function(dataTeacher){
      db.Student.findById(3).then(function(datastudent){
        datastudent.addTeachers(dataTeacher)
      })
    })
  }
}student

// StudentTeacher.findStudents(1);//check associate
// StudentTeacher.findTeacher(3);//check associate
// StudentTeacher.checkValidate();//checkValidate
// StudentTeacher.checkRelation();//check student & siapa teacher nya
