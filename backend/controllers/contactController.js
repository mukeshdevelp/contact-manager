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

module.exports = {getContacts, createContact, getContactById};