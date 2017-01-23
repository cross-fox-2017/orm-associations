const db = require('./models')

function findStudents(teacherid){
  db.Teacher.findById(teacherid).then(function(a){
      a.getStudents().then(function(b){
        b.forEach(function(c){
          console.log(`student id: ${c.id}, name: ${c.name}`)
        })
      })
  })
}

function findTeachers(studentid){
  db.Student.findById(studentid).then(function(a){
      a.getTeachers().then(function(b){
        b.forEach(function(c){
          console.log(`teacher id: ${c.id}, name: ${c.name}`)
        })
      })
  })
}

findStudents(1)
findTeachers(2)
