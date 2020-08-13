//引入模型
const {classesModel}=require('./models/classesModel.js');
//添加
module.exports.addClass=async (data)=>{
  console.log(data);

    return await classesModel.create(data);
}
//渲染
module.exports.getClass=async ()=>{
    //find all
    return await classesModel.find();
}