'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: /\S+@\S+\.\S+/,
        isUnique: function(value, next) {
          Student.find({
              where: {email: value}
          }).then(function(error, user) {
              if (error)
                  return next(error);
              if (user)
                  return next('Email address already in use!');
              next();
          });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Phone length must be 10 - 13'
        },
        isAlphanumeric: {
          args: false,
          msg: 'Phone not allow alphanumeric'
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.hasMany(models.Student_teacher)
        Student.belongsToMany(models.Teacher, {through: 'Student_teacher'})
      }
    }
  });
  return Student;
};
