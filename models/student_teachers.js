'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_teachers = sequelize.define('Student_teachers', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student_teachers.belongsTo(models.Students); // menghasilkan studentId ke dalam Student_teachers
        Student_teachers.belongsTo(models.Teachers); // menghasilkan teacherId ke dalam Student_teachers
      }
    }
  });
  return Student_teachers;
};
