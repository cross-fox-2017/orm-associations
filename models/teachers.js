'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email format incorrect"
        },
        isUniqued: function (value, next) {
          Teachers.findAll({
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
        Teachers.hasMany(models.Student_teachers); // menghasilkan teacherId ke dalam Student_teachers
        Teachers.belongsToMany(models.Students, {through: "Student_teachers"})
        // create Student_teachers with FK teacherId
        // This will add methods getStudents, setStudents, addStudent, addStudents to Teachers
      }
    }
  });
  return Teachers;
};
