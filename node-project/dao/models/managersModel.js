const mongoose = require('mongoose');

const managersSchema = new mongoose.Schema({
    account: String,
    password: String,
    name: String,
    age: String,
    gender: String,

}, { versionKey: false });
module.exports.managersModel = mongoose.model('managersModel', managersSchema, 'managers');