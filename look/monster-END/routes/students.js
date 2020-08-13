var express = require("express");
var router = express.Router();
//学生数据

const {first,Del,Add,upDataOne,upDataTwo}=require('../service/studentsservice.js');
const { moveFiles, removeFiles}=require('../utils/handleFiles.js');


//请求学生数据  渲染页面
router.get("/getstudents", async function (req, res, next) {
   const {type,value,size,index}=req.query;
    //调用函数  会返回一个对象  对象中的rows包含了学生对象数组
   res.send(await first({type,value,size,index}));
  });

//删除学生
router.post("/delstudentsById", async function (req, res) {
    //调用函数  会返回一个对象  对象中的rows包含了学生对象数组
    const {_id}=req.body;
   res.send(await Del({_id}));
   // console.log(await first());

  });

//添加学生
router.post("/addstudents", async function (req, res) {
    //调用函数  会返回一个对象  对象中的rows包含了学生对象数组
    const {name,age,sex,classId,headimg}=req.body;
   const data=(await Add({name,age,sex,classId,headimg}));
   if(data.success){//处理临时图片文件  上传成功后删除临时文件  并将要用的图片保存到永久文件夹
    res.send(data);
    moveFiles({//移动
      fromPath:'./public/imgtemp',//封装的函数  相对于app.js文件夹
      toPath:'./public/img',
      filename:headimg
    });
    removeFiles(filePath="./public/imgtemp")//删除临时文件夹  参照工具里封装的函数
   }
   console.log(data);

  });

  //修改学生第一步
router.post("/updatastudentsById", async function (req, res) {
   //调用函数  会返回一个对象  对象中的rows包含了学生对象数组
   const {_id}=req.body;
  //  console.log({_id});
  res.send(await upDataOne({_id}));
  // console.log(await first());

 });

 //修改学生第二部
router.post("/updataTwostudentsById", async function (req, res) {
  //调用函数  会返回一个对象  对象中的rows包含了学生对象数组
  const {_id,name,age,sex}=req.body;
  console.log({_id,name,age,sex});
 res.send(await upDataTwo({_id,name,age,sex}));
 // console.log(await first());

});

  module.exports = router;