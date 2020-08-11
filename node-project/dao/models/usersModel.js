const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    account:String,
    password:String,
    name:String,
    age:String,
    gender:String,
}, { versionKey: false });
module.exports.usersModel = mongoose.model('usersModel', usersSchema, 'users');