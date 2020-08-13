const { ordersModel } = require('./models/ordersModels');
// 添加订单
module.exports.addOrder = async function(data) {
    await ordersModel.create(data);
};
// 获取所有订单
module.exports.getAllOrders = async function() {
    const msg = await ordersModel.find().populate('goodId').populate('userId')
    return {
        data: msg
    }
};
// 获取指定的订单
module.exports.getOrder = async function(data) {
    const msg = await ordersModel.find({ _id: data })
    return {
        data: msg
    }
};
// 删除订单
module.exports.delOrder = async function(data) {
    let msg = await ordersModel.updateOne({ _id: data._id }, { removed: true });
    return {
        msg: msg
    }
};