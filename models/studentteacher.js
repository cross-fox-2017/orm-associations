'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // StudentTeacher.belongsTo(Student)
        // StudentTeacher.belongsTo(Teacher)
        StudentTeacher.belongsTo(models.Student)
        StudentTeacher.belongsTo(models.Teacher)
        // StudentTeacher.belongsTo(models.Student, {as: 'role'})
        // StudentTeacher.belongsTo(models.Teacher, {as: 'role'})
      }
    }
  });
  return StudentTeacher;
};
