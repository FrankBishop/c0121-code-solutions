const fs = require('fs');
const copy = fs.readFile(process.argv[3], 'utf8', (err, data) => {
  if (err) throw err;
});

fs.writeFile(process.argv[2], copy + '\n', 'utf8', err => {
  if (err) throw err;
  console.log(process.argv)
});
