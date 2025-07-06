//@get all conatcts
//@route GET api/conatcts
//@access PUBLIC

const getContacts = async (req, res) => {
    res.status(200).json({

        "message": "get all contacts"
    })
};

//@create all conatcts
//@route POST api/conatcts
//@access PUBLIC
const createContact = async (req,res) => {
    console.log(req.body);
    const {name, email, contact} = req.body;
    if(!(name|| email ||contact)){
        res.status(400);
        throw new Error("All fields are required")
    }
    res.status(201).json({
        "message": "contact created"
    })
}

//@get contact by id
//@route get api/conatcts/:id
//@access PUBLIC
const getContactById = async (req,res) => {
    res.status(200).json({
        "message": "getting  contact by id"
    })
}

//@put contact by id
//@route UPDATE api/conatcts/:id
//@access PUBLIC
const updateContact = async (req,res) => {
    res.status(200).json({
       "message": `update contact for ${req.params.id}`
    })
}

//@delete contact by id
//@route DELETE api/conatcts/:id
//@access PUBLIC
const deleteContact = async (req,res) => {
    res.status(200).json({
       "message": `contact deleted for ${req.params.id}`
    })
}

module.exports = {
    getContacts,
    createContact, 
    getContactById,
    updateContact, 
    deleteContact
};