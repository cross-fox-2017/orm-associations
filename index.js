"use strict"

let db = require("./models");
let faker = require("faker");

db.Teacher.create(
  {name: "Rubi Henjaya", phone: "1231231234", email: "ereyahoo.com"}
).catch(function (err) {
  console.log(err.message);
})

/*
1. Bulk Create
db.Student.bulkCreate([
  {first_name: 'Rubi', last_name: "Henjaya", birthdate: "1986-11-20"},
  {first_name: 'Riza', last_name: "Fahmi", birthdate: "1983-12-31"},
  {first_name: 'Windi', last_name: "Ana", birthdate: "1987-07-11"}
])

db.Teacher.bulkCreate([
  {name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber()},
  {name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber()},
  {name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber()}
])
*/

/*
2. Cara call back tanpa for each:
db.Student.getAllData(function (data) {
  console.log(data[0].dataValues);
});
*/

/*
3. Driver Code soal sebelum
db.Student.getAllData(function (cb) {
  cb.forEach(function (data) {
    console.log(data.id);
    console.log(data.first_name);
    console.log(data.last_name);
    console.log(data.full_name);
    console.log(data.birthdate);
    console.log(data.age + '\n');
  })
});

db.Student.create(
  {first_name: 'Rubi', last_name: "Henjaya", birthdate: "1986-11-20", email: "ere@yahoo.com", height: 150, phone: "1231e231234"}
).catch(function (err) {
  console.log(err.message);
})
*/
