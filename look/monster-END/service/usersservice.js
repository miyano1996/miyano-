//解构接收第三层暴露的login方法   暴露的是对象格式
const {login,Register,isLogin}=require('../dao/usersDao.js');
// const {Register}=require('../dao/usersDao.js');
// const {isLogin}=require('../dao/usersDao.js');
//将自己的函数暴露  供第一层传入形参供第三层使用
//登录
module.exports.login=async function(data){
    //调用第三层的login函数  将第一层的形参再次传递
    //此时第三层会返回数据处理结果，返回的是个数组
    const goLogin=await login(data);
    //进行数据的逻辑判断在返回给第一层
    /*不可逆有规律加密
    if(goLogin.length>0){
        return {msg:'登录成功',success:true}
    }else{
        return {msg:'登录失败',success:false}
    }*/

    //不可逆无规律加密
    if(goLogin.length>0){
        return {msg:'登录成功',success:true,password:goLogin[0].password}//将密码传到第一层用方法比对
    }else{
        return {msg:'登录失败',success:false}
    }
}
//注册
module.exports.Register=async function(data){
//调用第三层的login函数  将第一层的形参再次传递
    //此时第三层会返回数据处理结果，返回的是个数组
    const isRegister=await Register(data);
    //进行数据的逻辑判断在返回给第一层
    if(isRegister._id){//有值就成功
        return {msg:'注册成功',success:true}
    }else{
        return {msg:'注册失败',success:false}
    }
}
//验证重名
module.exports.isLogin=async function(data){
 //调用第三层的login函数  将第一层的形参再次传递
    //此时第三层会返回数据处理结果，返回的是个数组
    const againLogin=await isLogin(data);
    console.log(data);
    //进行数据的逻辑判断在返回给第一层
    if(againLogin.length>0){
        return {msg:'账号以存在',success:true}
    }else{
        return {msg:'账号可使用',success:false}
    }
}