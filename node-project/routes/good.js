var express = require('express');
var router = express.Router();

const { delGood, addGood, findGood, findAllGoods, updateGood } = require('../service/goodsServer');
// 添加商品
router.post('/addGood', async function(req, res, next) {
    let data = req.body;
    let msg = await addGood(data);
    if (msg.success) {
        res.send({
            success: true,
        })
    } else {
        res.send({
            success: false,
        })
    }
});
// 获取所有商品信息
router.get('/findAllGoods', async function(req, res, next) {
    let msg = await findAllGoods();
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
// 获取某个商品信息
router.post('/findGood', async function(req, res, next) {
    const data = req.body;
    let msg = await findGood(data);
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
//修改商品信息
router.post('/updateGood', async function(req, res, next) {
    const data = req.body;
    let msg = await updateGood(data);
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
//下架或上架商品
router.post('/delGood', async function(req, res, next) {
    const data = req.body;
    let msg = await delGood(data);
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
})
module.exports = router;