const db = require('./models')

// db.Teacher.findById(9).then(function(x){
//   db.Student.findById(9).then(function(s){
//     s.setTeacher(x)
//   })
// })

db.Teacher.findById(3).then(function(teach){
  db.Student.findById(2).then(function(student){
    student.addTeachers(teach)
  })
})
