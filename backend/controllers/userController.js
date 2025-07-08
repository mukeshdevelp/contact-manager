const asyncHandler = require('express-async-handler');


//@POST register a user
//@route POST api/users/register
//@access PUBLIC

const registerUser = asyncHandler(async (req,res) => {
    res.status(200).json({"message": "register page"})
});

//@POST login a user
//@route POST api/users/login
//@access PUBLIC

const loginUser = asyncHandler(async (req,res) => {
    res.status(200).json({"message": "register page"})
});


//@GET current user info
//@route GET api/users/current
//@access PRIVATE

const currentUser = asyncHandler(async (req,res) => {
    res.status(200).json({"message": "register page"})
});

module.exports = {registerUser, loginUser, currentUser};
