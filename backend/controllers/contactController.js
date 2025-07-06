//@get all conatcts
//@route GET api/conatcts
//@access PUBLIC

const getContacts = (req, res) => {
    res.status(200).json({

        "message": "get all contacts"
    })
};



module.exports = {getContacts};