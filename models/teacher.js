'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email:{
       type:DataTypes.STRING,
       validate:{//start validate email
         isEmail : true,
         isUnique: function(value, next){
           Teacher.find({
             where:{email:value},
             attributes:['id']
           }).done(function(user){
             if(user){
               return next('Email address already in use!')
             }
             next();
           });
         }
       }//End validate email
    },
    phone:{
      type:DataTypes.INTEGER,
      validate:{
        len : {
          args:[10,13],
          msg:"validation error : phone length must be 10-13"
        },
        isNumeric:{
          args : true,
          msg:"validation error : phone not allow letters"
        },
        isAlphanumeric:{
          args: false,
          msg:"validation error: phone not allow alphanumeric"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.hasMany(models.StudentTeacher)
        Teacher.belongsToMany(models.Student,{through:'StudentTeacher'})
      }
    }
  });
  return Teacher;
};
