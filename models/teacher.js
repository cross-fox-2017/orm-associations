'use strict';
module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define('Teacher', {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Cek Pengisian Email"
                },
                isUniqued:function(cekMail, runNext){
                  Teacher.findAll({
                    where:{
                      email:cekMail
                    }
                  }).then(function(data){
                    if(data.length > 0){
                      return runNext("Email Sudah Ada");
                    }else{
                      runNext()
                    }
                  })
                }
            }
        },
        phone: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Teacher.hasMany(models.Student)
            }
        }
    });
    return Teacher;
};
