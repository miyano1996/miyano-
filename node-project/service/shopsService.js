const { getShops,addShops,delShops,updateShops,getOneShop } = require('../dao/shopsDao')
module.exports.getShops = async data => {
    return await getShops(data)
}
module.exports.addShops = async data =>{
    if(await addShops(data)._id){
        return {
            msg:'添加成功',
            success:true
        }
    }
};
module.exports.delShops = async data=>{
    if(await delShops(data).deletedCount==1){
        return{
            msg:'删除成功',
            success:true
        }
    }
};
module.exports.updateShops = async data=>{
    if(await updateShops(data).nModified==1){
        return{
            msg:'修改成功',
            success:true
        }
    }
};
module.exports.getOneShop = async _id=>{
    const data = await getOneShop(_id);
    // if(data._id){
        return{
            msg:"获取单个店铺数据成功",
            success:true,
            rows:data
        // }
    }
}