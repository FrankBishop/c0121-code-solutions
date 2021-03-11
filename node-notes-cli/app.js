// const { listenerCount } = require('events');
const fs = require('fs');
const dataJSON = require('./data.json');
// const todo = require('./todo.txt');
// fs.writeFile('todo.txt', list, 'utf8', err => {
//   if (err) throw err;
// });

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    let key;
    for (key in dataJSON.notes) {
      console.log(`${key}: ${dataJSON.notes[key]}`);
    }
  });
} else if (process.argv[2] === 'create') {
  // console.log(dataJSON);
  // let todos = JSON.stringify(dataJSON.notes, null, 2)
  // console.log(todos);
  const todoToAdd = process.argv[3];
  addTodo(todoToAdd);
  console.log(dataJSON);
  const todos = JSON.stringify(dataJSON, null, 2);
  // let updatedTodos = JSON.parse(todos);
  fs.writeFile('data.json', todos, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
}

// let todos = JSON.stringify(data.JSON, null, 2)
// maybe set result of for in loop to a variable to call later in other functions
function addTodo(addedTodo) {
  dataJSON.notes[dataJSON.nextId] = addedTodo;
  dataJSON.nextId++;
}
