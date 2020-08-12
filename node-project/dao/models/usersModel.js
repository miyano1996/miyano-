/*
 * @Author: your name
 * @Date: 2020-08-11 15:44:10
 * @LastEditTime: 2020-08-11 16:51:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\node-project\dao\models\usersModel.js
 */
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    account: String,
    password: String,
    name: String,
    age: String,
    gender: String,
    orders: Array
}, { versionKey: false });
module.exports.usersModel = mongoose.model('usersModel', usersSchema, 'users');