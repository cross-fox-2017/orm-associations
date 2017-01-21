'use strict';
const Student = require('./student.js')

module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: {args: true, msg: "Email in wrong format"},
      isUniq: function(value, next){
        Teacher.findAll({where:{email:value}, attributes: ['id']}).then(function(data){
          if (data.length>0){ return next('Email address already in use!')}
            next();
          })
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Teacher.hasMany(models.Student);
        Teacher.belongsToMany(models.Student, {through: 'student_teacher', foreignKey: 'teacherId' })
      }
    }
  });
  return Teacher;
};
