const express = require('express');


const router = express.Router();
const { getContacts, createContact, getContactById, updateContact ,deleteContact} = require('../controllers/contactController')
// importing all the routes written in server.js
router.route('/').get(getContacts).post(createContact);



//gettting individual contact based on id
router.route('/:id').get(getContactById).put(updateContact).delete(deleteContact)



module.exports = router;