const mongoose = require("mongoose");

const babysitterSchema = new mongoose.Schema({
    phone_number: {
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
    building_number: {
        type: String,
        required: false
    },
    postcode: {
        type: String,
        required: false,
        unique: false
    },
    social_media_link: {
        type: String
    },
    date_of_availability: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    Age: {
        type: String,
        require: true
    },
    skills: {
        type: String,
        required: true
    }

})

const Babysitter = mongoose.model('Babysitter', babysitterSchema);

module.exports = Babysitter;

