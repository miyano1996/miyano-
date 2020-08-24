const { cartModel } = require('./models/cartModel');
//读取数据模型   模型js模块会暴露模型名字

module.exports.addCart = async (data) => {
    return await cartModel.create(data)
}
module.exports.getCart = async (data) => {
    return (await cartModel.find(data)).filter(item => !item.status)
}
module.exports.getOrders = async (data) => {
    return (await cartModel.find(data)).filter(item => item.status)
}
module.exports.updateCart = async ({_id,num,time}) => {
    return await cartModel.updateOne({ _id }, { num,status:true,time });
}
module.exports.deleteCart = async (_id)=> {
    return await cartModel.deleteOne({_id})
}