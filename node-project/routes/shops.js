var express = require('express');
var router = express.Router();

/* GET users listing. */
const { getShops } = require('../service/shopsService');
router.get('/getShops',async function (req, res, next) {
    const data = req.query;
    // console.log(data);
    const datas = await getShops(data)
    console.log(datas);
    res.send(datas)
});

module.exports = router;
