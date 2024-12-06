const mongoose = require('mongoose');

// Define the Student schema
const StudentSchema = new mongoose.Schema({
    "name": {
        type: String,
        require: true
    },
    "city": {
        type: String,
        require: true
    },
        "email": {
            type: String,
            require: true
        },
        "contact": {
            type: String,
            require: true
        },


    });

// Create the Student model based on the schema
const StudentModel = mongoose.model('crud', StudentSchema);

module.exports = StudentModel;
