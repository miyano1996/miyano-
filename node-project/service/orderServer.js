const { getAllOrders, delOrder, getOrder } = require('../dao/ordersDao');

module.exports.getAllOrders = async function(data) {
    let msg = await getAllOrders(data);
    if (msg.data.length > 0) {
        return {
            data: msg,
            success: true
        }
    } else {
        return {
            data: null,
            success: false
        }
    }
};
module.exports.delOrder = async function(data) {
    let msg = await delOrder(data);
    if (msg.msg.n == 1) {
        return {
            success: true
        }
    } else {
        return {
            success: false
        }
    }

};
//个人
// module.exports.addOrder = async function(data){
//  if(await addOrder(data)._id){
//      return '添加成功'
//  }
// }