const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add conatct name"]
    },
    email:{
        type: String,
        required: [true, "Please add conatct email"]
    },
     email:{
        type: String,
        required: [true, "Please add conatct phone number"]
    },

}, 
{
    // timestamps
    timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactSchema);