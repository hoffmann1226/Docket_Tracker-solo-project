const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET ROUTE FOR SEARCH
router.get('/:id', rejectUnauthenticated,  (req, res) => {
    console.log('in details router')
    let queryText = `SELECT * FROM "event_info" WHERE "case" = $1 ORDER BY "due_date" ASC`;
    pool.query(queryText, [req.params.id]).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
})


module.exports = router;