const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    good:Object,
    num:{
        type:Number
    },
    status: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    },
    time:String
}, { versionKey: false });
module.exports.cartModel = mongoose.model('cartModel', cartSchema, 'cart');