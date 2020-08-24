var express = require('express');
var router = express.Router();

const { addCart, getCart, updateCart,getOrders,deleteCart } = require('../service/cartService');

router.post('/addCart', async function(req, res, next) {
    let data = req.body;
    let resData = await addCart(data);
    res.send(resData)
});
router.post('/getCart',async (req,res)=>{
    let data = req.body;
    const resData = await getCart(data)
    res.send(resData)
})
router.post('/getOrders',async (req,res)=>{
    let data = req.body;
    const resData = await getOrders(data)
    res.send(resData)
})
router.post('/updateCart',async (req,res)=>{
    let data = req.body;
    const resData = await updateCart(data)
    res.send(resData)
})
router.post('/deleteCart', async (req, res)=> {
	const { _id } = req.body;
	res.send(await deleteCart(_id));
})



module.exports = router;
