"use strict"

const db = require('./models')

// db.Teacher.bulkCreate([
//   {name: 'Rubi Henjaya', email: 'rubi@gmail.com', phone: '08194341321'},
//   {name: 'Windiana Krismanuyar', email: 'windi@yahoo.com', phone: '081282379082'},
//   {name: 'Adhitia Hidayat', email: 'adit@gmail.com', phone: '081829830921'},
//   {name: 'Akbar Sahata S', email: 'akbar@yahoo.com', phone: '081028392744'},
//   {name: 'Adhy Wiranata', email: 'adhy@yahoo.com', phone: '081927468972'},
//   {name: 'M Haidar Hanif', email: 'haidar@hotmail.com', phone: '0811213727302'},
//   {name: 'Riza Fahmi', email: 'riza@hotmail.com', phone: '0817241027407'},
//   {name: 'Ronald Ishak', email: 'ronald@hacktiv8.com', phone: '0811192409124'},
//   {name: 'Septian Adhi Tama', email: 'tama@gmail.com', phone: '0811123080940'}
//   // {name: 'Ida Bagus Chahya Dhegana', email: 'dheganagmail.com', phone: '0811adas!'}
// ]).then(function(teacher) {
//   console.log(teacher);
// })
//
// db.Teacher.create({
//   name: 'Ida Bagus Chahya Dhegana',
//   email: 'dheganagmail.com',
//   phone: '081152asdas'
// }).then(function(teacher){
//   console.log(teacher);
// })
//
// db.Student.bulkCreate([
//   {name: 'Ida Bagus Chahya Dhegana', birthdate: '1989-01-12', email: 'dhegana@gmail.com', phone: '08129042724'},
//   {name: 'Fadly Kayo', birthdate: '1989-06-19', email: 'fadly@yahoo.com', phone: '081282341413'},
//   {name: 'Eri Irawan', birthdate: '1992-03-31', email: 'eri@hotmail.com', phone: '081123151512'}
// ]).then(function(student) {
//   console.log(student);
// })

db.Student.create({
  name: 'Ida Bagus Chahya Dhegana',
  birthdate: '1989-01-12',
  email: 'dheganagmail.com',
  phone: '081152asdas'
}).then(function(student){
  console.log(student);
})


/*
  models.Student.findById(2).then(function(data){
    console.log(data.getFullName());
  })

  models.Student.findById(2).then(function(data){
    console.log(data.getAge());
  })
*/


/*
  models.Student.bulkCreate([
    {first_name: 'Rubi', last_name: 'Henjaya', birthdate: '1989-03-31'},
    {first_name: 'Windiana', last_name: 'Krismanuyar', birthdate: '1992-09-22'}
  ]).then(function(student) {
    console.log(student);
  })

  models.Student.getAllData(function(students){
    students.forEach(function(student){
      console.log(student.id)
      console.log(student.first_name)
      console.log(student.last_name);
    })
  })

  models.Student.create({
    age: 28
  }).then(function(student){
    console.log(student);
  })

  models.Student.destroy({
    where: {
      id: 7
    }
  });

  models.Student.findAll({
    where: {
      id: 2
    }
  }).then(function(student){
    console.log(student);
  })
*/
