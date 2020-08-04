const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in router.get!!')
    const queryString = `SELECT * FROM "event_info" ORDER BY "due_date" ASC`;
    pool.query(queryString)
    .then((result)=>{res.send(result.rows)})
    .catch((error)=>{console.log('GET error:', error)}) 
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;