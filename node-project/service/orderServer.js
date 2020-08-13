const { addOrder, getAllOrders, delOrder, getOrder } = require('../dao/ordersDao');

module.exports.getAllOrders = async function() {
    let msg = await getAllOrders();
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