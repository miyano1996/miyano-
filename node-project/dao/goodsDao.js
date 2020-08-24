const { goodsModel } = require('./models/goodsModel');

module.exports.addGood = async function(data) {
    await goodsModel.create(data);
};
module.exports.delGood = async function(data) {
    let msg = await goodsModel.updateOne({ _id: data.id }, { status: data.status });
    return msg
};
module.exports.findAllGoods = async function() {
    let msg = await goodsModel.find().populate({
        path: 'shopId',
    })
    return {
        data: msg,
    }
};
module.exports.findGood = async function(data) {
    if (data._id != undefined) {
        let msg = await goodsModel.find({ _id: data._id });
        return {
            data: msg,
        }
    } else {
        let msg = await goodsModel.find({ name: data.name });
        return {
            data: msg,
        }
    }

};
module.exports.updateGood = async function(data) {
    let msg = await goodsModel.updateOne({ _id: data.id }, {
        name: data.name,
        image: data.image,
        store: data.store,
        detail: data.detail,
        price: data.price,
        type: data.type
    });
    return {
        data: msg,
    }
}