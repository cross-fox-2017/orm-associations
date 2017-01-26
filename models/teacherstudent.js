'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeacherStudent = sequelize.define('TeacherStudent', {
    teacherid: DataTypes.INTEGER,
    studentid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        TeacherStudent.belongsTo(models.Student)
        TeacherStudent.belongsTo(models.Teacher)
      }
    }
  });
  return TeacherStudent;
};
