const {addClass,getClass}=require('../dao/classesDao.js');
//新增
module.exports.addClass=async (data)=>{
    const SQL=await addClass(data);//{ _id: 5f195ef6eb7d2c239c0467e9, classname: '架构2班' }
    // console.log(SQL)
    if(SQL.id){
        return {success:true,msg:'新增班级成功'}
    }
    return {success:false,msg:'新增班级失败'}

}
//渲染
module.exports.getClass=async ()=>{
    const SQL=await getClass();//
    // console.log(SQL)
    if(SQL.length>0){
        return {success:true,msg:'请求班级数据成功',rows:SQL}
    }
    return {success:false,msg:'请求班级数据失败'}

}