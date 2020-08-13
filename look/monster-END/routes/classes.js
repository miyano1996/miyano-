var express = require('express');
var router = express.Router();

const {addClass,getClass}=require('../service/classesService.js');
//添加班级
router.post('/addclass',async function(req, res, next) {
  // console.log('msg')
  const {className,teachersId}=req.body;
  console.log(className,teachersId);
  res.send(await addClass({className,teachersId}));
  
});
//渲染班级下拉框
router.get('/getclass',async function(req, res, next) {
  res.send(await getClass());
  
});

module.exports = router;
