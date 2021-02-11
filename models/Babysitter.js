const mongoose = require("mongoose");

const babysitterSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true, trim: true }
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: { type: String, required: true },
        number: { type: String, required: true },
        city: { type: String, required: true },
        postCode: { type: String, required: true }
    },
    socialMediaLink: {
        type: String,
        unique: true
    },
    dateOfAvailability: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        required: true
    },
    skills: {
        type: [String]
    }
})

const Babysitter = mongoose.model('Babysitter', babysitterSchema);

module.exports = Babysitter;

