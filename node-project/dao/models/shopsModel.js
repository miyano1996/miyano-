const mongoose = require('mongoose');

const shopsSchema = new mongoose.Schema({
    name: String,
    credit:String,
    status: String,
    type:String,
    des:String,
    date:String,
    boss:String,
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'managersModel'
    }
}, { versionKey: false });
module.exports.shopsModel = mongoose.model('shopsModel', shopsSchema, 'shops');