"use strict"

let db = require("./models");
let faker = require("faker");

// TEST CODE EMAIL VALIDATION
// db.Teachers.create(
//   {name: "Rubi Henjaya", phone: "1231231234", email: "ereyahoo.com"}
// ).catch(function (err) {
//   console.log(err.message);
// })

// LIST OF ASSOCIATIONS
// db.Student_teachers.bulkCreate([
//   {StudentId: 13, TeacherId: 1},
//   {StudentId: 14, TeacherId: 2},
//   {StudentId: 15, TeacherId: 3},
//   {StudentId: 16, TeacherId: 4},
//   {StudentId: 17, TeacherId: 5},
//   {StudentId: 18, TeacherId: 6},
//   {StudentId: 19, TeacherId: 7},
//   {StudentId: 20, TeacherId: 8},
//   {StudentId: 21, TeacherId: 8},
// ])

/*
Student's List:
13|Veronica|Quigley|
14|Alberta|Balistreri|
15|Lonzo|Wisoky|
16|Josianne|Yost|
17|Ethel|Hoeger|
18|Moshe|Johnston|
19|Prince|Walker|
20|Kamron|Reichert|
21|Lorna|Legros|

Teacher's List:
1|Dee Fisher|Alda41@gmail.com
2|Diego Cormier|Clinton77@gmail.com
3|Tiana Rodriguez|Damon10@yahoo.com
4|Minnie Runolfsdottir|Juliet.Quitzon64@yahoo.com
5|Everardo Schmidt|Johnpaul_Terry@yahoo.com
6|Mr. Filomena Fritsch|Orlando81@yahoo.com
7|Kaci Nitzsche|Brian_OConner23@yahoo.com
8|Dr. Anna Smith|Demarco34@yahoo.com
9|Maya Lesch|Lawson.Miller27@hotmail.com
*/

// TEST CODE
function findTeacher(student_id) {
  db.Students.findById(student_id).then(function (find) {
    find.getTeachers().then(function (data) {
      console.log(`Teacher(s): \n`);
      data.forEach(function (get) {
        console.log(`Id: ${get.id}`);
        console.log(`Name: ${get.name}`);
        console.log(`Email: ${get.email}\n`);
      })
    })
  })
}
findTeacher(20);

function findStudent(teacher_id) {
  db.Teachers.findById(teacher_id).then(function (find) {
    find.getStudents().then(function (data) {
      console.log(`Student(s): \n`);
      data.forEach(function (get) {
        console.log(`Id: ${get.id}`);
        console.log(`First Name: ${get.first_name}`);
        console.log(`Last Name: ${get.last_name}\n`);
      })
    })
  })
}
findStudent(8);















/*
1. Bulk Create
db.Students.bulkCreate([
  {first_name: 'Rubi', last_name: "Henjaya", birthdate: "1986-11-20"},
  {first_name: 'Riza', last_name: "Fahmi", birthdate: "1983-12-31"},
  {first_name: 'Windi', last_name: "Ana", birthdate: "1987-07-11"}
])

db.Teachers.bulkCreate([
  {name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber()},
  {name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber()},
  {name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber()}
])
*/

/*
2. Cara call back tanpa for each:
db.Students.getAllData(function (data) {
  console.log(data[0].dataValues);
});
*/

/*
3. Driver Code soal sebelum
db.Students.getAllData(function (cb) {
  cb.forEach(function (data) {
    console.log(data.id);
    console.log(data.first_name);
    console.log(data.last_name);
    console.log(data.full_name);
    console.log(data.birthdate);
    console.log(data.age + '\n');
  })
});

db.Students.create(
  {first_name: 'Rubi', last_name: "Henjaya", birthdate: "1986-11-20", email: "ere@yahoo.com", height: 150, phone: "1231e231234"}
).catch(function (err) {
  console.log(err.message);
})
*/
