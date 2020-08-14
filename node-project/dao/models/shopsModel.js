/*
 * @Author: your name
 * @Date: 2020-08-11 15:44:10
 * @LastEditTime: 2020-08-11 16:51:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\node-project\dao\models\shopsModel.js
 */
const mongoose = require('mongoose');

const shopsSchema = new mongoose.Schema({
    name: String,
    credit:String,
    status: String,
    type:String,
    des:String,
    date:String,
    boss:String,
    chartsData:Object,
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'managersModel'
    }
}, { versionKey: false });
module.exports.shopsModel = mongoose.model('shopsModel', shopsSchema, 'shops');