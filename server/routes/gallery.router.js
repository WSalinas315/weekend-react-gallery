const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

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
});

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

// DELETE route
router.delete('/:id', (req, res) => {
    const galleryID = req.params.id;
    const queryText = `DELETE FROM "gallery" WHERE "id" = $1;`;
    pool.query(queryText, [galleryID]).then((result) => {
        console.log('DELETED item ID', galleryID, 'from the database.');
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error with query ${queryText}, error is:`, error);
        res.sendStatus(500);
    });
});

module.exports = router;