var express = require('express');
var router = express.Router();

/* GET users listing. */
const { getShops,addShops,delShops,updateShops } = require('../service/shopsService');
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


module.exports = router;
