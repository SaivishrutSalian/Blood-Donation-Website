const mongoose = require('mongoose');

const donorSchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    address: {type: String},

    tel: {type: Number},
    bloodgroup: {type: String},
    weight: {type: Number},
    date: {type: String},
    diseases: {type: String},
    age: {type: Number},
    bloodpressure: {type: Number},
    status: {type: Number, default: 0}

}, {
    timestamp : true

})

module.exports = mongoose.model('Donor', donorSchema);