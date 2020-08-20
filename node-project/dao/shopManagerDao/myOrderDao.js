const { ordersModel } = require('../models/ordersModels.js');

//新增订单
module.exports.addOrder = async (obj)=>{
    return await ordersModel.create(obj)
}

//通过用户id获取订单
module.exports.getOrderByUserId = async (obj)=>{
    // return await ordersModel.find({userId:obj.userId,status:obj.status})
    return await ordersModel.find({userId:obj.userId,status:obj.status}).populate('goodId').populate('userId')
}

//取消订单
module.exports.cancelOrder = async (obj)=>{
    return await ordersModel.updateOne({_id:obj._id},{status:obj.status})
}

