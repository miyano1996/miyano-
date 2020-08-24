var express = require('express');
var router = express.Router();

const { getAllOrders, delOrder, addOrder, delCarOrder, pay } = require('../service/orderServer');
// 新增订单
router.post("/addOrder", async function(req, res, next) {
    await addOrder(req.body);
    res.send({
        success: true
    })
});
// 付款
router.post("/pay", async function(req, res, next) {
    let msg = await pay(req.body);
    console.log(msg);
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
// 商家删除
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
// 用户删除
router.post("/delCarOrder", async function(req, res, next) {
    console.log(req.body);
    let msg = await delCarOrder(req.body);
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