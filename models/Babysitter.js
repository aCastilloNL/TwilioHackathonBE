const mongoose = require("mongoose");

const babysitterSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
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
        type: String
    },
    postcode: {
        type: String
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

