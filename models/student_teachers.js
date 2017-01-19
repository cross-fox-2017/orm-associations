'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_teachers = sequelize.define('Student_teachers', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student_teachers.belongsTo(Students);
        Student_teachers.belongsTo(Teachers);
      }
    }
  });
  return Student_teachers;
};
