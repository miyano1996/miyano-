var express = require('express');
var router = express.Router();
const {getShops,changeState} = require('../../shopManagerService/shopManagerService.js');

router.get('/getShops',async function(req,res,nex){
    console.log(req.query); 
    const obj = req.query;
    res.send(await getShops(obj));
})

router.post('/changeState',async function(req,res,nex){
    console.log(req.body); 
    const obj = req.body;
    res.send(await changeState(obj));
})


module.exports = router;