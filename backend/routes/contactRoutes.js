const express = require('express');


const router = express.Router();

// importing all the routes written in server.js
router.route('/').get((req, res) => {
    res.status(200).json({

        "message": "server is running"
    });
});

module.exports = router;