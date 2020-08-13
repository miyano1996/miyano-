const {addTeachers,getTeachers}=require('../dao/teachersDao.js');
//新增
module.exports.addTeachers=async (data)=>{
    const SQL=await addTeachers(data);//{ _id: 5f195ef6eb7d2c239c0467e9, classname: '架构2班' }
    // console.log(SQL)
    if(SQL.id){
        return {success:true,msg:'新教师级成功'}
    }
    return {success:false,msg:'新增教师失败'}

}
//渲染
module.exports.getTeachers=async ()=>{
    const SQL=await getTeachers();
    //不管请求成功与否   都要返回数组
    return {success:true,msg:'请求教师数据成功',rows:SQL}
}