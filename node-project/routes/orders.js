var express = require('express');
var router = express.Router();

const { getAllOrders } = require('../service/orderServer');
// 获取所有订单
router.get('/getAllOders', async function(req, res, next) {
    let msg = await getAllOrders();
    if (msg.success) {
        res.send({
            data: msg.data,
            success: msg.success
        })
    } else {
        res.send({
            data: msg.data,
            success: msg.success
        })
    }

});
module.exports = router;