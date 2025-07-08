const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const bcrypt = require('bcrypt');
//@POST register a user
//@route POST api/users/register
//@access PUBLIC

const registerUser = asyncHandler(async (req,res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are necessary");
    }   
    // checking if the email already exists
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400)
        throw new Error('user already registered')
    }
    // decrypting the password
    const hashedPassword =  await bcrypt.hash(password, 10);
    //console.log(hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(user);
    if(user){
       res.status(201).json({_id: user.id, email: user.email})
    }
    else{
        re.status(400);
        throw new Error("User data is not valid");
    }

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
