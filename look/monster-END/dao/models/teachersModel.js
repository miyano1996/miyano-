//数据集合相关配置
const mongoose=require('mongoose');//mongoose数据库相关
//1.设置数据结构
const teachersSchema=new mongoose.Schema({
    name:String,
    age:String
},{ versionKey: false });
//2.设置数据模型===》》》  模型名称 结构名称 集合名称  
//
module.exports.teachersModel= mongoose.model('teachersModel',teachersSchema,'teachers')