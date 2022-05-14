const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number,
    },
    dob: {
        required: true,
        type: Number
    },
    hobbies: {
        required: true,
        type: String,
    }, 
    education: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Mozammil-Validate', dataSchema)