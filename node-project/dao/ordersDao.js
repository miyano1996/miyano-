const { ordersModel } = require('./models/ordersModels');
// 添加订单
module.exports.addOrder = async function(data) {
    await ordersModel.create(data);
};
// 获取所有订单
module.exports.getAllOrders = async function() {
    const msg = await ordersModel.find().populate({
        path: 'goodId',
        populate: {
            path: 'userId'
        }
    });
    // const msg = await ordersModel.find().populate('goodId').populate('userId')

    return {
        data: msg
    }
};