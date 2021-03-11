const fs = require('fs');
const dataJSON = require('./data.json');

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
  const todoToAdd = process.argv[3];
  addTodo(todoToAdd);
  const todos = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', todos, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
} else if (process.argv[2] === 'delete') {
  console.log('it deletes');
  const toDelete = process.argv[3];
  console.log('delete', toDelete);
  deleteTodo(toDelete);
  console.log(dataJSON);
  const todos = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', todos, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
} else if (process.argv[2] === 'update') {
  console.log('it updates');
  const toUpdate = process.argv[3];
  const updateTodo = process.argv[4];
  console.log(updateTodo);
  updateATodo(toUpdate, updateTodo);
  console.log(dataJSON);
  const todos = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', todos, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
}

function addTodo(addedTodo) {
  dataJSON.notes[dataJSON.nextId] = addedTodo;
  dataJSON.nextId++;
}

function deleteTodo(deletedTodo) {
  delete dataJSON.notes[deletedTodo];
}

function updateATodo(todoNumber, updatedTodo) {
  console.log('function', todoNumber);
  console.log('function', updatedTodo);
  console.log(dataJSON.notes);
  dataJSON.notes[todoNumber] = updatedTodo;
}
