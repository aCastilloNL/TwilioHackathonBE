const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    name: String,
    age: Number,
    skills: [String]
})

const Member = mongoose.model('Member', memberSchema);

module.exports = Member; 

