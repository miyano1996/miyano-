var express = require('express');
var router = express.Router();

/* GET users listing. */
const { getShops,addShops,delShops,updateShops,getOneShop,addShopView } = require('../service/shopsService');
router.get('/getShops',async function (req, res, next) {
    const data = req.query;
    // console.log(data);
    const datas = await getShops(data)
    // console.log(datas);
    res.send(datas)
});
router.post('/addShops',async function(req,res,next){
    const data = req.body;
    const datas = await addShops(data)
    res.send(datas)
});
router.post('/delShops',async function(req,res,next){
    const data = req.body;
    const datas = await delShops(data)
    res.send(datas)
});
router.post('/updateShops',async function(req,res,next){
    const data = req.body;
    const datas = await updateShops(data)
    res.send(datas)
})
router.post("/getOneShop" , async (req,res)=>{
   
    const{_id} = req.body;
    console.log(_id,'rout')
    const data = await getOneShop(_id)
    res.send(data)
})
router.post('/addShopView',async(req,res)=>{
    const {_id} = req.body;
    res.send(await addShopView(_id))
})


module.exports = router;
