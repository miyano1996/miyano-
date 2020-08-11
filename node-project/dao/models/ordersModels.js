const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    status:String,
    goodId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodsModel'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    }
}, { versionKey: false });
module.exports.ordersModel = mongoose.model('ordersModel', ordersSchema, 'orders');