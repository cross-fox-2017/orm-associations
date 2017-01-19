'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher_Student = sequelize.define('Teacher_Student', {
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher_Student.belongsTo(models.Teacher)
        Teacher_Student.belongsTo(models.Student)
      }
    }
  });
  return Teacher_Student;
};
