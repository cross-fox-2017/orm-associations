'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_teacher = sequelize.define('Student_teacher', {
    StudentId: {
      type: DataTypes.INTEGER,
      references: 'Students',
      referencesKey: 'id'
    },
    TeacherId: {
      type: DataTypes.INTEGER,
      references: 'Teachers',
      referencesKey: 'id'
    }
  }, {
    classMethods: {
      associate: function(models) {
        Student_teacher.BelongsTo(models.Student)
        Student_teacher.BelongsTo(models.Teacher)
      }
    }
  });
  return Student_teacher;
};
