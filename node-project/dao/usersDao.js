//读取数据模型   模型js模块会暴露模型名字
const {usersModel}=require("./models/usersModel.js");

module.exports.login=async data=>{//登录
    return await usersModel.find(data);
}

module.exports.register=async data=>{//注册
    return await usersModel.create(data);
}

module.exports.isLogin=async data=>{//验证重名
    return await usersModel.find(data);
}