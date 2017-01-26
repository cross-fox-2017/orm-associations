'use strict'

const db = require('./models')

function findStudents(teacherid){
  db.Teacher.findById(teacherid).then(function(data1){
      data1.getStudents().then(function(data2){
        data2.forEach(function(data3){
          console.log(`student id: ${data3.id}, name: ${data3.name}`)
        })
      })
  })
}

function findTeachers(studentid){
  db.Student.findById(studentid).then(function(data1){
      data1.getTeachers().then(function(data2){
        data2.forEach(function(data3){
          console.log(`teacher id: ${data3.id}, name: ${data3.name}`)
        })
      })
  })
}

findStudents(1)
findTeachers(2)
