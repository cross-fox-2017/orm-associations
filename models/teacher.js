'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: /\S+@\S+\.\S+/,
        isUnique: function(value, next) {
          Teacher.find({
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
        Teacher.hasMany(models.Student);
      }
    }
  });
  return Teacher;
};
