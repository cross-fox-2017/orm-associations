'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, cb) {
          Student.find({
              where: {email: value},
              attributes: ['id']
          })
              .done(function(user) {
                  if (user)
                      return cb('Email address already in use');
                  cb();
              });
       }
     }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "Validation error: Phone length must be 10 - 13"
        },
        isNumeric: {
          args: true,
          msg: "Validation error: Phone not allow letters"
        },
        isAlphanumeric: {
          args: false,
          msg: "Validation error: Phone not allow alphanumeric"
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
