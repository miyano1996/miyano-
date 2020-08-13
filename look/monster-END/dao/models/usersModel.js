//数据集合相关配置
const mongoose=require('mongoose');//mongoose数据库相关
//1.设置数据结构
const usersSchema=new mongoose.Schema({
    username:String,
    password:String
},versiomkey=false);
//2.设置数据模型===》》》  模型名称 结构名称 集合名称  
//
module.exports.myModel= mongoose.model('usersModel',usersSchema,'users')