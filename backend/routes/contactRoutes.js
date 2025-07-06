const express = require('express');


const router = express.Router();
const { getContacts, createContact, getContactById, updateContact ,deleteContact} = require('../controllers/contactController')
// importing all the routes written in server.js
router.route('/').get(getContacts);

// making extra routes
router.route('/').post(createContact);

//gettting individual contact based on id
router.route('/:id').get(getContactById)
router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)


module.exports = router;