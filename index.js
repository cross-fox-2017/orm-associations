const db = require('./models')

// db.Teacher.findById(9).then(function(x){
//   db.Student.findById(9).then(function(s){
//     s.setTeacher(x)
//   })
// })

// db.Teacher.findById(1).then(function(teach){
//   db.Student.findById(4).then(function(student){
//     student.addTeachers(teach)
//   })
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
