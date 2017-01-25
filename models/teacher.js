'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
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
      }
  }, {
    classMethods: {
      associate: function(models) {
        Teacher.hasMany(models.StudentTeacher)
        Teacher.belongsToMany(models.Student,{through:'StudentTeacher'})
      }
    }
  });
  return Teacher;
};
