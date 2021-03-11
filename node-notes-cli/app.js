// const { listenerCount } = require('events');
const fs = require('fs');
const dataJSON = require('./data.json');

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
}
