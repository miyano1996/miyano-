const { addOrder, getAllOrders } = require('../dao/ordersDao');

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