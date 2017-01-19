'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email format incorrect"
        },
        isUniqued: function (value, next) {
          Teacher.findAll({
            where: {
              email: value
            }
          }).then(function (data) {
            if(data.length > 0) {
              return next('Data already exist');
            }
            return next();
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: false,
          msg: "Phone not allow alphanumeric"
        },
        isNumeric: {
          args: true,
          msg: "Phone not allow letters"
        },
        len: {
          args: [10,13],
          msg: "Phone length must be 10-13"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Teachers.hasMany(Student_teachers);
      }
    }
  });
  return Teacher;
};
