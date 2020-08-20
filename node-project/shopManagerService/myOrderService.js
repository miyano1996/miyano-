

const { addOrder, getOrderByUserId, cancelOrder} = require('../dao/shopManagerDao/myOrderDao.js');

module.exports.addOrder = async (obj)=>{
    const data = await addOrder(obj)
    return {msg:'新增订单成功',success:true,row:data}
}

module.exports.getOrderByUserId = async (obj)=>{
    const data = await getOrderByUserId(obj)
    return {msg:'id获取订单成功',success:true,row:data}
}

module.exports.cancelOrder = async (obj)=>{
    const data = await cancelOrder(obj)
    return {msg:'取消订单成功',success:true,row:data}
}