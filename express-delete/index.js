const express = require('express');
const app = express();

let grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', function (req, res) {
  let key;
  array = [];
  for (key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
  grades = array;
  console.log(grades);
});

app.delete('/api/grades:id', function (req, res) {
  res.send(req.params);
  grades.splice(req.params, 1);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
