const express = require('express');


const router = express.Router();
const { getContacts } = require('../controllers/contactController')
// importing all the routes written in server.js
router.route('/').get(getContacts);

// making extra routes
router.route('/').post((req, res) =>{
    res.status(200).json({
        "message": "contact created"
    })
});

//gettting individual contact based on id
router.route('/:id').get((req,res) => {
    res.status(200).json({
        "message": `get contact for ${req.params.id}`
    })
})
router.route('/:id').put((req,res) => {
    res.status(200).json({
        "message": `update contact for ${req.params.id}`
    })
})

router.route('/:id').delete((req,res) => {
    res.status(200).json({
        "message": `contact deleted for ${req.params.id}`
    })
})


module.exports = router;