//@get all conatcts
//@route GET api/conatcts
//@access PUBLIC

const getContacts = (req, res) => {
    res.status(200).json({

        "message": "get all contacts"
    })
};

//@create all conatcts
//@route POST api/conatcts
//@access PUBLIC
const createContact = (req,res) => {
    res.status(201).json({
        "message": "contact created"
    })
}

//@get contact by id
//@route get api/conatcts/:id
//@access PUBLIC
const getContactById = (req,res) => {
    res.status(200).json({
        "message": "contact created"
    })
}

//@put contact by id
//@route UPDATE api/conatcts/:id
//@access PUBLIC
const updateContact = (req,res) => {
    res.status(200).json({
       "message": `update contact for ${req.params.id}`
    })
}



module.exports = {getContacts, createContact, getContactById,updateContact};