const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel')
//@get all conatcts
//@route GET api/conatcts
//@access PUBLIC

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@create all conatcts
//@route POST api/conatcts
//@access PUBLIC
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name, email, contact} = req.body;
    if(!(name|| email ||contact)){
        res.status(400);
        throw new Error("All fields are required")
    }
    // saving the phone in database
    const phone = await Contact.create({
        name,
        email, 
        contact
    })
    res.status(201).json({
       phone
    })
})

//@get contact by id
//@route get api/conatcts/:id
//@access PUBLIC
const getContactById = asyncHandler
(async (req,res) => {
    res.status(200).json({
        "message": "getting  contact by id"
    })
})

//@put contact by id
//@route UPDATE api/conatcts/:id
//@access PUBLIC
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({
       "message": `update contact for ${req.params.id}`
    })
})

//@delete contact by id
//@route DELETE api/conatcts/:id
//@access PUBLIC
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({
       "message": `contact deleted for ${req.params.id}`
    })
})

module.exports = {
    getContacts,
    createContact, 
    getContactById,
    updateContact, 
    deleteContact
};