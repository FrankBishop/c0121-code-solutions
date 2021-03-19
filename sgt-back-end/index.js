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
  console.log(req.body);
  const values = [];
  let key;
  for (const key in req.body) {
    values.push(`${req.body[key]}`);
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
  `
  db.query(sql, values)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    });
});


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
