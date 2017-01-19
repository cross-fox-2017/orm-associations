'use strict';
module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        name: DataTypes.STRING,
        email: {
            type:DataTypes.STRING,
            validate:{
              isEmail:{
                args:true,
                msg:"Cek Pengisian Email Siswa"
              },
              isUniqued:function(cekMail, runNext){
                Student.findAll({
                  where:{
                    email:cekMail
                  }
                }).then(function(data){
                  if(data.length > 0){
                    return runNext("Email di Data Siswa Sudah Ada")
                  }else{
                    return runNext()
                  }
                })
              }
            }
        },
        phone: DataTypes.INTEGER,
        TeacherId:DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Student.belongsTo(models.Teacher)
                  Student.hasMany(models.Teacher_Student)
            }
        }
    });
    return Student;
};
