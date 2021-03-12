const fs = require('fs');
const dataJSON = require('./data.json');

if (process.argv[2] === 'read') {
  let key;
  for (key in dataJSON.notes) {
    console.log(`${key}: ${dataJSON.notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  const todoToAdd = process.argv[3];
  addTodo(todoToAdd);
  const todos = JSON.stringify(dataJSON, null, 2);
  changeFile(todos);
} else if (process.argv[2] === 'delete') {
  const toDelete = process.argv[3];
  deleteTodo(toDelete);
  const todos = JSON.stringify(dataJSON, null, 2);
  changeFile(todos);
} else if (process.argv[2] === 'update') {
  const toUpdate = process.argv[3];
  const updateTodo = process.argv[4];
  updateATodo(toUpdate, updateTodo);
  const todos = JSON.stringify(dataJSON, null, 2);
  changeFile(todos);
}

function addTodo(addedTodo) {
  dataJSON.notes[dataJSON.nextId] = addedTodo;
  dataJSON.nextId++;
}

function deleteTodo(deletedTodo) {
  delete dataJSON.notes[deletedTodo];
}

function updateATodo(todoNumber, updatedTodo) {
  dataJSON.notes[todoNumber] = updatedTodo;
}

function changeFile(todoList) {
  fs.writeFile('data.json', todoList, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
}
