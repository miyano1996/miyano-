const { addOrder, getAllOrders, delOrder, getOrder, delCarOrder, pay } = require('../dao/ordersDao');
module.exports.addOrder = async function(data) {
    await addOrder(data);
};
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
module.exports.pay = async function(data) {
    let msg = await pay(data);
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
module.exports.delCarOrder = async function(data) {
    let msg = await delCarOrder(data);
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