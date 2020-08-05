const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET Route
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in router.get')
    const queryString = `SELECT * FROM "event_info" ORDER BY "due_date" ASC`;
    pool.query(queryString)
    .then((result)=>{res.send(result.rows)})
    .catch((error)=>{console.log('GET error:', error)}) 
});

//POST Route
router.post('/', rejectUnauthenticated, (req, res) => {

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

module.exports = router;