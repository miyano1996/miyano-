const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    }
}, { versionKey: false });
module.exports.ordersModel = mongoose.model('ordersModel', ordersSchema, 'orders');