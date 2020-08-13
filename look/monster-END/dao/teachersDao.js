//引入模型
const {teachersModel}=require('./models/teachersModel.js');
//添加
module.exports.addTeachers=async (data)=>{
  console.log(data);

    return await teachersModel.create(data);
}
//渲染
module.exports.getTeachers=async ()=>{
    //find all
    return await teachersModel.find();
}