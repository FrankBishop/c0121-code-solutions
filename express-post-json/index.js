const express = require('express');
const app = express();

let nextId = 1;

let grades = {

};

app.get('/api/grades', function (req, res) {
  let key;
  let array = [];
  for (key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', function (req, res, next) {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).json(req.body);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
