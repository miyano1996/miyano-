const {getShops} = require('../dao/shopManagerDao/shopManagerDao.js')

module.exports.getShops = async ()=>{
    const data = await getShops();
    return {msg:'店铺数据获取成功',success:true,row:data}
}