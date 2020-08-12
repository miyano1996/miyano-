var express = require('express');
var router = express.Router();

const jwt=require('jsonwebtoken');//token
const {KEY}=require('../utils/consts.js');//封装的密钥串
const bcryptjs=require('bcryptjs');//加密方式
const {login,register,isLogin,Adminlogin}=require('../service/managersService.js')

router.post('/loginAdmin', async (req, res)=> {//管理员登录
  let {account,password}=req.body;
  let data=(await Adminlogin({account}));
  if(data.success){
    // //不可逆无规律加密方式 比对密码  返回true或false
    // let canlogin=bcryptjs.compareSync(password,data.password);
    if(password==data.password){
      const token=jwt.sign(
        {account},//设置token中要保存的信息
        KEY,//自定义密钥串
        {expiresIn:60*100}//100分钟有效期
      );
      res.send({msg:'登录成功',success:true,token,_id:data._id,name:account})
    }else{
      res.send({msg:"登录失败",success:false})
    }
  }else{
    res.send(data)
  }
  console.log({account,password});
});

router.post('/login', async (req, res)=> {//登录
  let {account,password}=req.body;
  let data=(await login({account}));
  if(data.success){
    //不可逆无规律加密方式 比对密码  返回true或false
    let canlogin=bcryptjs.compareSync(password,data.password);
    if(canlogin){
      const token=jwt.sign(
        {account},//设置token中要保存的信息
        KEY,//自定义密钥串
        {expiresIn:60*100}//100分钟有效期
      );
      res.send({msg:'登录成功',success:true,token,_id:data._id,name:account})
    }else{
      res.send({msg:"登录失败",success:false})
    }
  }else{
    res.send(data)
  }
  console.log({account,password});
});

router.post('/register', async (req, res)=> {//注册
 const {account,password,name,age,gender}=req.body;
 let newpassword=bcryptjs.hashSync(password,10);//不可逆无规律加密方式
 res.send(await register({account,password:newpassword,name,age,gender})); 
 
 console.log({account,password,name,age,gender});
});

router.post('/isLogin', async (req, res)=> {//验证重名
 const {account}=req.body;
 console.log(account);
 res.send(await isLogin({account})); 
 
 console.log({account,password,name,age,gender});
});

router.get('/tokenLogin', async (req, res)=> {//验证是否登录
  const tokenStr=req.get('Authorization');//返回字符串  Bearer '需要的用户名编码信息'
  const token=tokenStr.split(' ')[1];//字符串变为数组 空格后的就是我们需要的
  const {account}=jwt.verify(token,KEY);
  res.send({
    msg:"用户以登录",
    success:true,
    account
  })
});

module.exports = router;
