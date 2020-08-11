const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET Route for Docket
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in router.get')
    const queryString = `SELECT * FROM "event_info" ORDER BY "due_date" ASC`;
    pool.query(queryString)
    .then((result)=>{res.send(result.rows)})
    .catch((error)=>{console.log('GET error:', error)}) 
});

//POST Route for add page
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log( "in post route:", req.body );
  const query = `INSERT INTO "event_info" ( "case", "event", "due_date", "details", "user_id" ) VALUES ( $1, $2, $3, $4, $5 )`;
  const values = [ req.body.case, req.body.event, req.body.due_date, req.body.details, req.body.user_id  ];
  pool.query( query, values ).then( ( results )=>{
      res.sendStatus( 201 );
  }).catch( ( err )=>{
      console.log( 'ERROR with INSERT:', err );
      res.sendStatus( 500 );
  })
});

//DELETE Route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let reqId= req.params.id
    const queryText = 'DELETE FROM "event_info" WHERE id=$1';
    console.log('In router.delete id=', reqId);
    pool.query(queryText, [reqId])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE query', err);
        res.sendStatus(500);
      });
  });

  //PUT Route for edit page  //FIX THIS TO HAVE ID  AND FIX REC.BODY.ID to REC.PARAMS.ID
  router.put('/:id', rejectUnauthenticated, (req, res) => {
    let queryText = `UPDATE "event_info" SET "case" = $1, "event" = $2, "due_date" = $3, "details" = $4 WHERE "id" = $5;`;
    pool.query(queryText, [req.body.case, req.body.event, req.body.due_date, req.body.details, req.params.id])
        .then(response => {
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500);
        })
  })

  //get route for event details page
  router.get('/:id', rejectUnauthenticated,  (req, res) => {
    console.log('in details router')
    let queryText = `SELECT * FROM "event_info" WHERE "id" = $1`;
    pool.query(queryText, [req.params.id]).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

module.exports = router;