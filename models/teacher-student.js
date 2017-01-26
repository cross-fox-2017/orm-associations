'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher - Student = sequelize.define('Teacher-Student', {
    teacherid: DataTypes.INTEGER,
    studentid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeacher.belongsTo(models.Student)
        StudentTeacher.belongsTo(models.Teacher)
      }
    }
  });
  return Teacher - Student;
};
