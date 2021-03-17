const fs = require('fs');
const dataJSON = require('./data.json');

const express = require('express');
const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//   // eslint-disable-next-line no-console
//   console.log('Express server listening on port 3000');
// });

app.get('/api/notes', function (req, res) {
  let key;
  let array = [];
  for (key in dataJSON.notes) {
    array.push(dataJSON.notes[key]);
  }
  res.json(array);
  console.log(array);
  res.status(200).send(array);
});

// app.get('/api/notes/:id', function (req, res) {
//   const id = req.params.id;
//   console.log('id', id);
//   if (id < 0) {
//     res.status(404).send({"error": "id must be a positive integer"})
//   }
//   // console.log(dataJSON.notes[req.params.id]);
//   res.json(dataJSON.notes[req.params.id]);
// });
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
