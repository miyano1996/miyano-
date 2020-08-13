var express = require('express');
var router = express.Router();
const {getShops} = require('../../shopManagerService/shopManagerService.js');

router.get('/getShops',async function(req,res,nex){
    res.send(await getShops());
})

module.exports = router;