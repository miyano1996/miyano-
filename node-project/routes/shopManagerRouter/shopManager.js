
var express = require('express');
var router = express.Router();
const {getShops,changeState,changeCredit, changeLift,getShopsById} = require('../../shopManagerService/shopManagerService.js');

router.get('/getShops',async function(req,res,nex){
    // console.log(req.query); 
    const obj = req.query;
    // console.log(obj);
    res.send(await getShops(obj));
})

router.post('/changeState',async function(req,res,nex){
    // console.log(req.body); 
    const obj = req.body;
    res.send(await changeState(obj));
})

router.post('/changeCredit',async function(req,res,nex){
    // console.log(req.body); 
    const obj = req.body;
    res.send(await changeCredit(obj));
})

router.post('/changeLift',async function(req,res,nex){
    // console.log(req.body); 
    const obj = req.body;
    res.send(await changeLift(obj));
})

router.get('/getShopsById',async function(req,res,nex){
    // console.log(req.query); 
    const obj = req.query;
    // console.log(obj);
    res.send(await getShopsById(obj));
})


module.exports = router;