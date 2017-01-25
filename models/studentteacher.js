'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        StudentTeacher.belongsTo(models.Student)
        StudentTeacher.belongsTo(models.Teacher)
      }
    }
  });
  return StudentTeacher;
};
