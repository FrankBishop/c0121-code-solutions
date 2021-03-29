const express = require('express');
const path = require('path');
const app = express();
const joinedPath = path.join(__dirname , 'public');
const staticTest = app.use(express.static('public'));


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
