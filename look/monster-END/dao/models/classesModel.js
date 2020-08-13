//数据集合相关配置
const mongoose=require('mongoose');//mongoose数据库相关
//1.设置数据结构
const classesSchema=new mongoose.Schema({
    className:String,
    teachersId:{//关联班级集合
        type:mongoose.Schema.Types.ObjectId,
        ref:'teachersModel'//班级模型名称
    }
    // classTeacher:String
},{ versionKey: false });
//2.设置数据模型===》》》  模型名称 结构名称 集合名称  
//
module.exports.classesModel= mongoose.model('classesModel',classesSchema,'classes')