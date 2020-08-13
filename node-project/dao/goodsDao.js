const { goodsModel } = require('./models/goodsModel');

module.exports.addGood = async function(data) {
    await goodsModel.create(data);
};
module.exports.delGood = async function(data) {
    let msg = await goodsModel.deleteOne({ _id: data.id });
    return msg
};
module.exports.findAllGoods = async function(data) {
    let msg = await goodsModel.find();
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
        status: data.statue,
    });
    return {
        data: msg,
    }
}