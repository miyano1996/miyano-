var express = require('express');
var router = express.Router();

const {addTeachers,getTeachers}=require('../service/teachersService.js');
//添加班级
router.post('/addteachers',async function(req, res, next) {
  // console.log('msg')
  const {name,age}=req.body;
  console.log(name,age);
  res.send(await addTeachers({name,age}));
  
});
//渲染班级下拉框
router.get('/getteachers',async function(req, res, next) {
  res.send(await getTeachers());
  
});

module.exports = router;
