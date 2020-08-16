const { login,register,isLogin } = require("../dao/usersDao.js")


module.exports.login=async data=>{//登录
    const goLogin=await login(data);
    if(goLogin.length){
        //将密码传到第一层用自带方法对比
        //个人
        return {msg:'登录成功',success:true,password:goLogin[0].password,my:goLogin}
    }else{
        return{msg:'登录失败',success:false}
    }
}

module.exports.register=async data=>{//注册
    const isRegister=await register(data);
    if(isRegister._id){//创建返回对象
        return {msg:'注册成功',success:true}
    }else{
        return{msg:'注册失败',success:false}
    }
}

module.exports.isLogin=async data=>{//验证重名
    const againLogin=await isLogin(data);
    if(againLogin.length>0){//返回查找数组
        return {msg:'账号以存在',success:true}
    }else{
        return{msg:'账号可使用',success:false}
    }
}