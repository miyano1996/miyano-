//数据集合相关配置
const mongoose=require('mongoose');//mongoose数据库相关
//1.设置数据结构
const usersSchema=new mongoose.Schema({
    name:String,
    age:String,
    sex:String,
    classId:{//关联班级集合
        type:mongoose.Schema.Types.ObjectId,
        ref:'classesModel'//班级模型名称
    },
    imgsId:{//关联头像集合
        type:mongoose.Schema.Types.ObjectId,
        ref:'imgsModel'//班级模型名称
    },
    headimg:String
}, { versionKey: false });
//2.设置数据模型===》》》  模型名称 结构名称 集合名称  
//
module.exports.studentsModel= mongoose.model('studentsModel',usersSchema,'students')