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
    res.status(201).json(
       phone
    )
})

//@get contact by id
//@route get api/conatcts/:id
//@access PUBLIC
const getContactById = asyncHandler
(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    // there is a case when contact does not exist
    if(!contact){
        res.status(404)
        throw new Error("contact not found");
    }
    res.status(200).json(contact)
})

//@put contact by id
//@route UPDATE api/conatcts/:id
//@access PUBLIC
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    // there is a case when contact does not exist
    if(!contact){
        res.status(404)
        throw new Error("contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
       req.params.id,
       req.body, 
       { new : true}
    )
    res.status(200).json(updatedContact)
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