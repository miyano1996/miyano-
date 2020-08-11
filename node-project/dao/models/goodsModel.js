const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    name: String,
    image: Object,
    store: String,
    detail: Object,
    price: String,
    status: Boolean,
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shopsModel'
    }
}, { versionKey: false });
module.exports.goodsModel = mongoose.model('goodsModel', goodsSchema, 'goods');