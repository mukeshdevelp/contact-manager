const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "please enter a username"]
        },
        email:{
            type: String,
            required: [true, "please enter a email"],
            unique: [true, "email already exists"]
        },
        password:{
            type: String,
            required: [true, "please enter a password"]
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
// This will create a collection named 'users' in the database, as Mongoose automatically pluralizes the model name.