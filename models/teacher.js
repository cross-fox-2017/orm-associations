'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email:
    {
      type: DataTypes.STRING,
      validate: {
        isEmail: {args: true, msg: "Please insert correct email!"},
        isUnique: function(value, next) {
          Teacher.find({where: {email:value}, attributes:['id']}).done(function(err,data){
            if(err) {
              return next(err)
            }
            if(data){
              return next({msg: "Email already in use"})
            }
          next()
          })
        }
      }
    },
    phone:
    {
      type: DataTypes.STRING,
      validate: {
        len: {args: [10,13], msg: "Phone number only allow values with length 10 until 13"},
        isAlphanumeric: {args: true, msg: "Phone number not allow with alphanumeric"},
        isNumeric: {args: true, msg: "Phone number not allow with letters"}
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Teacher.hasMany(StudentTeacher)
        // Teacher.belongsToMany(Teacher,{through:'StudentTeacher'})
        Teacher.hasMany(models.StudentTeacher)
        Teacher.belongsToMany(models.Student,{through:'StudentTeacher'})
      }
    }
  });
  return Teacher;
};
