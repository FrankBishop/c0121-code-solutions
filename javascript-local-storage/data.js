/* exported todos */

var todos = [];
// an empty array literial is being assigned to the variable todos
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// the getItem method of the localStorage object is getting called with the argument string "javascript-local-stoage".  It is being
// assigned to the variable previousTodosJSON
if (previousTodosJSON !== null) {
// an if statement with the condition previousTodosJSON is not stricyly equal to null followed by the opening curly braces for the statement
  todos = JSON.parse(previousTodosJSON);
  // the parse method of the JSON object is getting called with the argument previousTodosJSON and it is getting assigned to todos
}
// closing curly braces
window.addEventListener('beforeunload', function () {
// the addEventListerner method of the window object is getting called with the arguments 'beforeunload' and a function with no parameters.
  var todosJSON = JSON.stringify(todos);
  // the stringify method of the JSON object is being called with the argument todos and it is getting assigned to the variable todosJSON
  localStorage.setItem('javascript-local-storage', todosJSON);
  // the setItem method of the localStorage object is being called with the arguments  "javascript-local-stoage" and todoJSON

});
// the closing curly braces for the function code block followed by the closing paranethesis for the arguments
