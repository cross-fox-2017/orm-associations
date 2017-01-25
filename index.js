"use strict"

var db = require('./models');

// db.Student.create({ firstname: 'rudi', lastname: 'kurniawan', birthdate:'1994-02-01', email:'ruddd@gmail.com', height:165, phone:"089694026806"})
// .then(function(student) {
//   console.log('added');
// }).catch(function (err) {
//   console.log(err.message);
// });



// db.Student.bulkCreate([
//   { name: 'pangky satyo', birthdate:'1989-04-01'},
//   { name: 'radit arya', birthdate:'1997-10-23'},
//   { name: 'deden ramdhani', birthdate:'1990-02-17'}
// ]).then(function(students) {
// console.log(students);
// })


// db.Student.findById(31).then(function(student){
//    console.log(student.getAge());
// })

function findMyStudents(teacherId){
  db.Teacher.findById(teacherId).then(function(stutea){
      stutea.getStudents().then(function(stu){
        stu.forEach(function(s){
          console.log(`student id: ${s.id}, name: ${s.name}`)
        })
      })
  })
}

function findMyTeachers(studentId){
  db.Student.findById(studentId).then(function(stutea){
      stutea.getTeachers().then(function(tea){
        tea.forEach(function(t){
          console.log(`teacher id: ${t.id}, name: ${t.name}`)
        })
      })
  })
}

findMyStudents(1)
findMyTeachers(2)


// db.Student.getAllData(function(students){
//   console.log("DATA STUDENTS\n");
//   students.forEach(function(student){
//     console.log(`nama : ${student.name}`)
//     console.log(`umur : ${student.getAge()}\n`);
//   })
// })

// db.Student.findAll().then(function(students){
//     students.forEach(function(student){
//     student.update({name : student.getFullName()})
//   })
// })
