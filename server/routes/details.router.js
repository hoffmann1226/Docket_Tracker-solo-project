const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET ROUTE FOR DETAILS
  router.get('/', rejectUnauthenticated,  (req, res) => {
    console.log('in details router', req.params.id)
    let queryText = `SELECT * FROM "event_info" WHERE "id" = $1`;
    pool.query(queryText, [req.params.id]).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
}) 



module.exports = router;