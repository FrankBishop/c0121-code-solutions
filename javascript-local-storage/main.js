/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// the querySelector argument of the docuement object is getting called with the argument "#todo-form" and it
// is being assigned to the variable $todoForm
$todoForm.addEventListener('submit', function (event) {
  // the addEventListener method of the $todoForm object is getting called with the arguments "submit" and the function with the
  // parameter event, followed by the opening curly braces for the code block
  event.preventDefault();
  // the preventDefault method of the event object is getting called
  var todo = {
    // an object literal is getting called and being assigned to the variable todo
    todoId: uuid.v4(),
    // The v4 method of the uuid object is getting called and is being assigned to the todoID key
    task: $todoForm.elements.task.value,
    // the value element of the task object of the elements object of the $todoForm object is getting assigned to the key task
    isCompleted: false
  // the boolean false is getting assigned to the key isCompleted
  };
  // the closing curly braces for the object literal
  todos.push(todo);
  // the push method of the todos object is getting called with the argument todo
  $todoList.append(renderTodo(todo));
  // the append method of the $todoList object is getting called with the argument, function renderTodo with the argument Todo
  $todoForm.reset();
  // the reset method of the $todoForm object is getting called
});
// the closing curly braces for the object literal
var $todoList = document.querySelector('#todo-list');

// the query selector method of the document object is getting called with the argument "todo-list" and it is getting assigned to the variable $todoList

$todoList.addEventListener('change', function (event) {
  // the addEventListerner of the $todoList object is getting called with the arguments "change", and a function with the parameters event
  var todoId = event.target.getAttribute('id');
  // the get Attribute method of the taget object of the event object is getting called with the argument 'id' and it
  // is getting assigned to the variable todoID

  for (var i = 0; i < todos.length; i++) {
    // a for loop with the initilization of 0 getting assigned to the variable i, the condition of i is less than the length property of the todos object
    //  and a final expression of i getting incremented by one, followed by opening curly braces
    if (todos[i].todoId === todoId) {
      // if statement with the condition of todoID property of the todos at i object is strictly equal to todoID
      todos[i].isCompleted = event.target.checked;
      // the checked property of the target object of the event object is getting assigned to the isCompleted property of todos at i
      break;
      // a break statement
    }
    // closing curly braces
  }
  // closing curly braces
});
// closing curly braces

for (var i = 0; i < todos.length; i++) {
// a for loop with the initilization of 0 getting assigned to the variable i, the condition of i is less than the length property of the todos object
//  and a final expression of i getting incremented by one, followed by opening curly braces
  var $todo = renderTodo(todos[i]);
  // renderTodo is being called with the argument todos at i and getting assigned to variable $todo
  $todoList.appendChild($todo);
  // the apprendChild method of the $todoList object is getting called with the argument $todo
}
// closing curly braces
function renderTodo(todo) {
// a function rendTodo is getting defined with the parameter todo
  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  // the createElement method of the document object is getting called with the argument 'li' and getting assigned to $todo
  $todo.setAttribute('class', 'list-group-item');
  // the setAttribute method of the $todo object is being called with the arguments 'class' and 'list-group-item'
  var $formCheck = document.createElement('div');
  // the createElement object of the document object is getting called with the argument 'div' and getting assigned to $formCheck
  $formCheck.setAttribute('class', 'form-check d-flex');
  // the setAttribute method of the $formCheck object is getting called with the arguments 'class' and 'form-check d-flex'
  var $checkbox = document.createElement('input');
  // the createElement method of the document object is getting called with the argument 'input' and is getting assigned to '$checkbox'
  $checkbox.checked = todo.isCompleted;
  // the isCompleted property of the todo object is getting assigned to the checked property of the $checkbox object
  $checkbox.setAttribute('id', todo.todoId);
  // the setAttribute method of the $checkbox object is getting called with the arguments 'id' and the todoId property of the todo object
  $checkbox.setAttribute('type', 'checkbox');
  // the setAttribute method of the $checkbox object is getting called with the arguments 'type' and 'checkbox'
  $checkbox.setAttribute('class', 'form-check-input');
  // the setAttribute method of the $checkbox object is getting called with the arguments , 'class' and 'form-check-input'
  var $label = document.createElement('label');
  // the createElement method of the docuement object is getting called with the argument 'label' and it is getting assigned to the variable $label
  $label.setAttribute('for', todo.todoId);
  // the setAttribute method of the $ label object is getting called with the arguments 'for' and the todoId property of the todo object
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // the setAttribute method of the $ label object is getting called with the arguments 'class' and 'form-check-label flex-grow-1 ml-2'
  $label.textContent = todo.task;
  // the task property of the todo object is getting assigned to the textContent property of the $label object

  $todo.append($formCheck);
  // the append method of the $todo object is getting called with the argument $formCheck
  $formCheck.append($checkbox, $label);
  // the append method of the $formCheck object is getting called with the arguments $checkbox and $label
  return $todo;
// the $todo object is being returned
}
// closing curly braces
