const {getShops,changeState} = require('../dao/shopManagerDao/shopManagerDao.js')

module.exports.getShops = async obj=>{
    const data = await getShops(obj);
    return {msg:'店铺数据获取成功',success:true,row:data}
}

module.exports.changeState = async obj=>{
    const data = await changeState(obj);
    return {msg:'店铺状态修改成功',success:true,row:data}
}