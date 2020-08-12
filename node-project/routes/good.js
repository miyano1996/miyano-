var express = require('express');
var router = express.Router();

const { delGood, addGood, findGood, findAllGoods, updateGood } = require('../server/goodsServer');
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
router.get('/findGood', async function(req, res, next) {
    const data = req.query;
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


module.exports = router;