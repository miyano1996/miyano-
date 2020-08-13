//读取数据模型  模型js模块会暴露模型名字
const { myModel } = require("./models/usersModel.js");
//暴露第三层定义的函数login 在第三层拿到第一层传来的请求数据开始数据操作

//登录
module.exports.login = async function (data) {
  //到数据库进行数据查找
  const goLogin = await myModel.find(data);//不可逆加密
  //将查询的结果返回  find查找的是一个数组格式
  return goLogin;
}

//注册
module.exports.Register = async function (data) {
  //到数据库进行数据查找
 return await myModel.create(data);
  //将查询的结果返回  find查找的是一个数组格式
  // return isRegister;
}
//验证重名

module.exports.isLogin = async function (data) {
  //到数据库进行数据查找
  //  return await myModel.find({data});
  const againLogin= await myModel.find(data);
  console.log(againLogin,data);
  //将查询的结果返回  find查找的是一个数组格式
  return againLogin;
}
