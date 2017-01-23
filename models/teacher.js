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
                      // We found a user with this email address.
                      // Pass the error to the next method.
                      return cb('Email address already in use!');
                  // If we got this far, the email address hasn't been used yet.
                  // Call next with no arguments when validation is successful.
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
