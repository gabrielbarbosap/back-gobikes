const mongoose = require('mongoose');
const Team = require('./Team');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    andress: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    bikes: {
        type: Object
    },
    solicit: {
        type: Object
    },
    requests: {
        type: Object
    }

});

module.exports = mongoose.model('user', userSchema)