const express = require('express');
const app = express();
app.use(express.json());

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', function (req, res) {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', function (req, res) {
  if (req.body.score < 0) {
    res.status(400).json({
      error: '"score" must be a positive integer'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: '"name" is a required field'
    });
    return;
  } else if (!req.body.course) {
    res.status(400).json({
      error: '"course" is a required field'
    });
    return;
  } else if (!req.body.score) {
    res.status(400).json({
      error: '"score" is a required field'
    });
    return;
  }
  const values = [];
  let key;
  for (const key in req.body) {
    values.push(`${req.body[key]}`);
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = req.params.gradeId;
  let test = false;
  if (id < 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: '"name" is a required field'
    });
    return;
  } else if (!req.body.course) {
    res.status(400).json({
      error: '"course" is a required field'
    });
    return;
  } else if (!req.body.score) {
    res.status(400).json({
      error: '"score" is a required field'
    });
    return;
  }
  const values = [];
  let key;
  for (const key in req.body) {
    values.push(`${req.body[key]}`);
  }
  console.log(values);
  const sql = `
    update "grades"
       set "course" = $1,
           "name" = $2,
           "score" = $3
     where "gradeId" = ${id}
     returning *;
  `;
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})












//   else if (req.body.content) {
//     let key;
//     for (key in dataJSON.notes) {
//       if (id === key) {
//         req.body.id = id;
//         dataJSON.notes[key] = req.body;
//         const todos = JSON.stringify(dataJSON, null, 2);
//         test = true;
//         fs.writeFile('data.json', todos, 'utf8', err => {
//           if (err) {
//             res.status(500).send({ error: 'An unexpected error occurred.' });
//           } else {
//             res.status(200).send(dataJSON.notes[key]);
//           }
//         });
//       }
//     }
//     if (test === false) {
//       res.status(404).send({ error: 'cannot find note with id' + ' ' + id });
//     }
//   } else {
//     res.status(400).send({ error: 'content is a required field' });
//   }
// });





// app.get('/api/grades/:gradeId', (req, res, next) => {
//   const gradeId = parseInt(req.params.gradeId, 10);
//   if (!Number.isInteger(gradeId) || gradeId <= 0) {
//     res.status(400).json({
//       error: '"gradeId" must be a positive integer'
//     });
//     return;
//   }
//   const sql = `
//     select *
//       from "grades"
//      where "gradeId" = $1
//   `;
//   const params = [gradeId];
//   db.query(sql, params)
//     .then(result => {
//       const grade = result.rows[0];
//       if (!grade) {
//         res.status(404).json({
//           error: `Cannot find grade with "gradeId" ${gradeId}`
//         });
//       } else {
//         res.json(grade);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({
//         error: 'An unexpected error occurred.'
//       });
//     });
// });
