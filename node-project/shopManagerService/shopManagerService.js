const {getShops,changeState,changeCredit,changeLift,getShopsById} = require('../dao/shopManagerDao/shopManagerDao.js')

module.exports.getShops = async obj=>{
    const data = await getShops(obj);
    return {msg:'店铺数据获取成功',success:true,row:data}
}

module.exports.changeState = async obj=>{
    const data = await changeState(obj);
    return {msg:'店铺状态修改成功',success:true,row:data}
}

module.exports.changeCredit = async obj=>{
    const data = await changeCredit(obj);
    return {msg:'店铺评分修改成功',success:true,row:data}
}

module.exports.changeLift = async obj=>{
    const data = await changeLift(obj);
    return {msg:'店铺封禁状态修改成功',success:true,row:data}
}

module.exports.getShopsById = async obj=>{
    const data = await getShopsById(obj);
    return {msg:'ID获取店铺成功',success:true,row:data}
}