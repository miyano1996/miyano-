var express = require('express');
var router = express.Router();

const { getAllOrders, delOrder } = require('../service/orderServer');
// 获取所有订单
router.get('/getAllOders', async function(req, res, next) {
    let msg = await getAllOrders(req.query);
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

router.post("/delOrder", async function(req, res, next) {
    let msg = await delOrder(req.body);
    if (msg.success) {
        res.send({
            success: true
        })
    } else {
        res.send({
            success: false
        })
    }

});
module.exports = router;