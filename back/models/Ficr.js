const mongoose = require('mongoose');

const { Schema } = mongoose;

const ficrSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
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

module.exports = mongoose.model('ficr', ficrSchema)