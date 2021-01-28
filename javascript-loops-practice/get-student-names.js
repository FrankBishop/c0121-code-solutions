/* exported getStudentNames */
// function getStudentNames(students) {
//   var key;
//   var studentNames = [];
//   var name = students.name;
//   for(key in students) {
//     studentNames.push(name);
//   }
//   return studentNames
// }
function getStudentNames(students) {
  var i;
  var studentNames = [];
  for (i = 0; i < students.length; i++) {
    var name = students[i].name;
    studentNames.push(name);
  }
  return studentNames;
}
