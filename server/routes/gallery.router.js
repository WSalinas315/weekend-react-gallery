const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let likeQuery = `UPDATE "gallery" SET "likes" = "likes"+1 WHERE "id" = $1;`;
    pool.query(likeQuery, [galleryId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error with query ${likeQuery}, error is:`, error);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "gallery" ORDER BY "id"`;
    pool.query(queryText).then((result) => {
        console.log('Retrieved from DB: ', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error with query ${queryText}, error is:`, error);
     });
});

// POST route
router.post('/', (req, res) => {
    const newPosting = [req.body.path, req.body.description];
    const queryText = `INSERT INTO "gallery" ("path", "description", "likes")
                        VALUES ($1, $2, 0);`;
    pool.query(queryText, newPosting).then((result) => {
        console.log('POSTED to server:', req.body);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error with query ${queryText}, error is:`, error);
        res.sendStatus(500);
    });
});


module.exports = router;