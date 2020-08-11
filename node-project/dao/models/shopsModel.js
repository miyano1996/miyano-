const mongoose = require('mongoose');

const shopsSchema = new mongoose.Schema({
    name: String,
    credit:String,
    status: Boolean,
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'managersModel'
    }
}, { versionKey: false });
module.exports.shopsModel = mongoose.model('shopsModel', shopsSchema, 'shops');