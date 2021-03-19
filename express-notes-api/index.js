const fs = require('fs');
const dataJSON = require('./data.json');

const express = require('express');
const app = express();

let nextId = 10;

app.use(express.json());

app.get('/api/notes', function (req, res) {
  let key;
  const array = [];
  for (key in dataJSON.notes) {
    array.push(dataJSON.notes[key]);
  }
  res.status(200).send(array);
});

app.get('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  if (id < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[id]) {
    res.status(404).send({ error: 'cannot find note with id' + ' ' + id });
  } else {
    res.status(200).send(dataJSON.notes[id]);
  }
});

app.post('/api/notes', function (req, res, next) {
  if (req.body.content) {
    req.body.id = nextId;
    dataJSON.notes[nextId] = req.body;
    const todos = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', todos, 'utf8', err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
        nextId++;
      }
    });
  } else {
    res.status(400).send({ error: 'content is a required field' });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  let test = false;
  if (id < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else {
    let key;
    for (key in dataJSON.notes) {
      if (id === key) {
        delete dataJSON.notes[key];
        const todos = JSON.stringify(dataJSON, null, 2);
        test = true;
        fs.writeFile('data.json', todos, 'utf8', err => {
          if (err) {
            res.status(500).send({ error: 'An unexpected error occurred.' });
          } else {
            res.status(204).send();
          }
        });
      }
    }
  }
  if (test === false) {
    res.status(404).send({ error: 'cannot find note with id' + ' ' + id });
  }
});

app.put('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  let test = false;
  if (id < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (req.body.content) {
    let key;
    for (key in dataJSON.notes) {
      if (id === key) {
        req.body.id = id;
        dataJSON.notes[key] = req.body;
        const todos = JSON.stringify(dataJSON, null, 2);
        test = true;
        fs.writeFile('data.json', todos, 'utf8', err => {
          if (err) {
            res.status(500).send({ error: 'An unexpected error occurred.' });
          } else {
            res.status(200).send(dataJSON.notes[key]);
          }
        });
      }
    }
    if (test === false) {
      res.status(404).send({ error: 'cannot find note with id' + ' ' + id });
    }
  } else {
    res.status(400).send({ error: 'content is a required field' });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
