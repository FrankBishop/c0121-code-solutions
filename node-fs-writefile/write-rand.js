const fs = require('fs');
const random = Math.random();
const randomString = random.toString();

fs.writeFile('random.txt', randomString, 'utf8', err => {
  if (err) throw err;
});
