const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true ,'name is Require'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true,'already registered'],
        lowercase: true,
    },
    email:{
        type: String,
        lowercase: true,
        trime : true,
    },
    password:{
        type: String,
        select: false,
        required: true,
    },
    bio: {
        type : String,
        trime : true,
    }
},{timestamps: true})

const registration = mongoose.model('Registration',registrationSchema);

module.exports = registration;