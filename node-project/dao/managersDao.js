//读取数据模型   模型js模块会暴露模型名字
const {managersModel}=require("./models/managersModel.js");
const {adminModel}=require("./models/adminModel.js");

module.exports.Adminlogin=async data=>{//管理员登录登录
    return await adminModel.find(data);
}
module.exports.login=async data=>{//登录
    return await managersModel.find(data);
}

module.exports.register=async data=>{//注册
    return await managersModel.create(data);
}

module.exports.isLogin=async data=>{//验证重名
    return await managersModel.find(data);
}