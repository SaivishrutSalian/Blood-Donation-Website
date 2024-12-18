const mongoose = require('mongoose');

const prospectSchema = mongoose.Schema({
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

    tel: {type: String},
    bloodgroup: {type: Number},
    date: {type: String},
    diseases: {type: String},
    age: {type: String},
    bloodpressure: {type: Number},
    status: {type: Number, default: 0}
}, {
    timestamp : true
})

module.exports = mongoose.model('Prospect', prospectSchema);