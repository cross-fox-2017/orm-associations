'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email : {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "EMAIL must contain @ then ."
        },
        isUnique : function(value,as){
          Student.findAll({where:{email: value}}).then(function(eh){
              if(eh.length>0){
                return as("data sudah ada")
              }
              else{
                return as();
              }
            })
          }
        }
      },
      phone:{
        type: DataTypes.STRING,
        validate:{
          isNumeric:{
            args:true,
            msg: "Phone not allow letters"
          },
          isAlphanumeric:{
            args:false,
            msg: "Phone not Allow alphanumeric"
          },
          len:{
            args:[10,13],
            msg: "Phone length must be 10-13 "
          }

        }
      },

  }, {
    classMethods: {
      associate: function(models) {
        Student.hasMany(models.StudentTeacher)
        Student.belongsToMany(models.Teacher,{through:'StudentTeacher'})
      }
    }
  });
  return Student;
};
