var express = require("express");
var router = express.Router();

const jwt=require('jsonwebtoken');//token
const {KEY}=require('../utils/consts.js');//密钥会多次用到  封装为常量减少出错
const bcryptjs=require('bcryptjs');//加密方法
// let  {getMd5}=require('../utils/crypto.js');//加密方法
//jie解构第二层暴露的login方法,暴露的是一个对象格式
const {login,Register,isLogin}=require('../service/usersservice.js');
// const {Register}=require('../service/usersservice.js');
// const {isLogin}=require('../service/usersservice.js');
router.post("/login", async function (req, res, next) {
  //接收前端发送过来的数据:
  //前端通过post发送的数据: req . body I
  //前端通过get发送的数据: req. query
  // let {username,password}= req.body;
  // let getMd5password=getMd5(password);//不可逆有规律加密方式
  let {username,password}= req.body;//不可逆无规律加密方式只请求用户名回来  将数据库的密码返回此地比对 
  let data=(await login({username}));//不可逆  无规律使用  返回对象里包括了加密密码
  if(data.success){
    let canlogin=bcryptjs.compareSync(password,data.password);//不可逆无规律加密方式 比对密码  返回true或false
    if(canlogin){
      //生成token令牌
      const token=jwt.sign(
        {username},          //设置token中要保存的信息
        KEY,                //密钥  自定义
        {expiresIn:60*100}    //有效时间  以妙计算
      );
      res.send({msg:'登录成功',success:true,token});//将token对象返回 将属性为用户名的保存到本地
    }else{
      res.send({msg:'登录失败',success:false});
    }
  }else{//二层返回未找到就直接登录失败
    res.send(data);
  }

  // console.log(data)
  //将第二层的逻辑判断返回到前端，在将函数传入第二层
  // res.send(await login({username}));//不可逆  有规律使用
  //能查到返回一个数组  查不到为空数组  用await 等待结果 配合async使用
  // const isend=await myModel.find({username:data.username,password:data.password})
  // console.log(isend,'come in');
  // isend.length>0
  //   ? res.send({ success: true, msg: "登录成功" })
  //   : res.send({ success: false, msg: "登录失败" });
});

//注册
router.post("/register",async function (req, res, next) {
  // const {username,password}=req.body;
  const {username,password}=req.body;
  // let getMd5password=getMd5(password);//不可逆有规律加密方式
  let newpassword=bcryptjs.hashSync(password,10);//不可逆无规律加密方式
  // console.log(getMd5password);
  //将第二层的逻辑判断返回到前端  将用户注册的内容传到第二层
  res.send(await Register({username,password:newpassword}));
  // const isend=await myModel.create({username,password});
  // const isend=await myModel.create({username:data.username,password:data.password});
  // console.log(typeof (data.password-0));
  // isend._id?//isend有值就成功
  // res.send({success: true, msg:"注册成功"}):res.send({success: false, msg:"注册失败"});
});

//验证重名
router.get("/again", async function (req, res, next) {
  // const {username}=req.query;
  const {username}=req.query;
  //将第二层的逻辑判断返回到前端  将用户名的内容传到第二层
  res.send(await isLogin({username}));
  // const isend=await myModel.find({username});
  // console.log(isend,'come in');
  // isend.length>0?res.send({success:true,mgs:'账号存在'}):res.send({success:false,mgs:'账号可用'})
});

//验证用法是否登录
router.post("/tokenLogin", async function (req, res, next) {
  //解码token 获取token中保存的用户名
  const tokenStr=req.get('Authorization');//返回字符串  Bearer '需要的用户名编码信息'
  const token=tokenStr.split(' ')[1];//字符串变为数组 空格后的就是我们需要的
  const {username}=jwt.verify(token,KEY);//取到了用户名
  // console.log('token配置成功',username);
  res.send({
    msg:'用户以登录',
    success:true,
    username
  });
  
});


module.exports = router;
