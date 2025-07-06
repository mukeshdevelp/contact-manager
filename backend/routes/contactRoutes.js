const express = require('express');


const router = express.Router();
const { getContacts, createContact, getContactById, updateContact } = require('../controllers/contactController')
// importing all the routes written in server.js
router.route('/').get(getContacts);

// making extra routes
router.route('/').post(createContact);

//gettting individual contact based on id
router.route('/:id').get(getContactById)
router.route('/:id').put(updateContact)

router.route('/:id').delete((req,res) => {
    res.status(200).json({
        "message": `contact deleted for ${req.params.id}`
    })
})


module.exports = router;