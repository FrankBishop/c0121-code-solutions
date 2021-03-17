const fs = require('fs');
const dataJSON = require('./data.json');

const express = require('express');
const app = express();

let nextId = 10;

app.use(express.json());

app.get('/api/notes', function (req, res) {
  let key;
  let array = [];
  for (key in dataJSON.notes) {
    array.push(dataJSON.notes[key]);
  }
  res.json(array);
  res.status(200).send(array);
});

app.get('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  if (id < 0) {
    res.status(404).send({ "error": "id must be a positive integer" })
  } else {
    let key;
    for (key in dataJSON.notes) {
      if (id === key) {
        res.status(200).send(dataJSON.notes[key]);
      }
    }
  }
  res.status(404).send({ "error": "cannot find note with id" + ' ' + id });
});

app.post('/api/notes', function (req, res, next) {
  if (req.body.hasOwnProperty('content')) {
    req.body.id = nextId;
    dataJSON.notes[nextId] = req.body;
    res.status(201).json(req.body);
    nextId++;
    const todos = JSON.stringify(dataJSON, null, 2);
    changeFile(todos);
  } else {
    res.status(400).send({ "error": "content is a required field" })
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  if (id < 0) {
    res.status(400).send({ "error": "id must be a positive integer" });
  } else {
    let key;
    for (key in dataJSON.notes) {
      if (id === key) {
        delete dataJSON.notes[key];
        res.status(204).send(dataJSON.notes[key]);
        const todos = JSON.stringify(dataJSON, null, 2);
        changeFile(todos);
      }
    }
  }
  res.status(404).send({ "error": "cannot find note with id" + ' ' + id });
});

app.put('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  console.log(req.params.content);
  if (id < 0) {
    res.status(400).send({ "error": "id must be a positive integer" });
  } else if ((req.body.hasOwnProperty('content'))) {
    let key;
    for (key in dataJSON.notes) {
      console.log(key);
      if (id === key) {
        dataJSON.notes[key] = req.body;
        res.status(200).send(dataJSON.notes[key]);
        const todos = JSON.stringify(dataJSON, null, 2);
        changeFile(todos);
      }
    }
  } else {
    res.status(400).send({ "error": "content is a required field" });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

function changeFile(todoList) {
  fs.writeFile('data.json', todoList, 'utf8', err => {
    if (err) {
      res.status(201).send({ "error": "An unexpected error occurred." });
    }
  });
}
