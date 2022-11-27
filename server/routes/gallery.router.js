const express = require('express');
const router = express.Router();
//const galleryItems = require('../modules/gallery.data');
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

// // GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "gallery" ORDER BY "id"`;
    pool.query(queryText).then((result) => {
        console.log('Retrieved from DB: ', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        alert(`Error with query ${queryText}, error is:`, error);
     });
});

module.exports = router;