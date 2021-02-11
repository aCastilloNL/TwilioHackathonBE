const mongoose = require("mongoose");

const babysitterSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    buildingNumber: {
        type: String,
        required: false
    },
    postcode: {
        type: String,
        required: false,
        unique: false
    },
    socialMediaLink: {
        type: String
    },
    dateOfAvailability: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    skills: {
        type: String,
        required: true
    }

})

const Babysitter = mongoose.model('Babysitter', babysitterSchema);

module.exports = Babysitter;

