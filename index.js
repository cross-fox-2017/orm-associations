const models = require('./models')

// models.Teacher.create({ //Create Data Guru
//   name: "Zal",
//   email: "zul@gmail.com",
//   phone: 08909986876
// })

// models.Student.create({
//     name: "Dinarista",
//     email: `dinarista@gmail.com`,
//     phone: 08909986876,
//     TeacherId:2
// })


// models.Student.findAll().then(function(dt) { // Menampilkan semua siswa beserta gurunya
//     dt.forEach(function(data) {
//         data.getTeacher().then(function(getData){
//           console.log(`Name: ${data.name}, Teacher: ${getData.name}`);
//         })
//     })
// })

// models.Student.findById(21).then(function(dt) { // Menampilkan guru dari siswa tertentu
//         dt.getTeacher().then(function(getData){
//           console.log(`Name: ${dt.name}, Teacher: ${getData.name}`);
//         })
// })

// models.Teacher.findById(2).then(function(dt){ // Menampilkan Semua Siswa dari guru tertentu
//     dt.getStudents().then(function(data){
//       console.log("Daftar Siswa Pak Guru: "+dt.name);
//       var number = 1;
//       data.forEach(function(item){
//         console.log(`${number}. ${item.name}`);
//         number++
//       })
//     })
// })

// models.Teacher_Student.create({ //Create Data Teacher_Student
//   TeacherId: 1,
//   StudentId: 13
// })


// models.Student.findById(13).then(function(dt){ // Menampilkan Semua Guru dari Siswa Tertentu
//     dt.getTeacher_Students().then(function(data){
//       console.log("Daftar Guru dari Siswa: "+dt.name);
//       let number =1;
//       data.forEach(function(item){
//         item.getTeacher().then(function(getItem){
//             console.log(number+". Pak: "+getItem.name);
//             number++
//         })
//       })
//     })
// })
