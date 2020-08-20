var express = require('express');
var router = express.Router();

const {addOrder,getOrderByUserId,cancelOrder} = require('../../shopManagerService/myOrderService.js');

router.post('/addOrder', async (req,res,next)=>{
    const data = await addOrder(req.body);
    res.send(data)
})

router.get('/getOrderByUserId', async (req,res,next)=>{
    const data = await getOrderByUserId(req.query);
    res.send(data)
})

router.post('/cancelOrder', async (req,res,next)=>{
    const data = await cancelOrder(req.body);
    res.send(data)
})

module.exports = router;