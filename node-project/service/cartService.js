const { addCart,getCart,updateCart,getOrders,deleteCart } = require('../dao/cartDao.js')

module.exports.addCart = async (data)=>{
    const resData = await addCart(data);
    if(resData._id){
        return {
            success:true,
        }
    }
}
module.exports.getCart = async (data)=>{
    const resData = await getCart(data);
    return {
        success:true,
        row:resData
    }
}
module.exports.getOrders = async (data)=>{
    const resData = await getOrders(data);
    return {
        success:true,
        row:resData
    }
}
module.exports.updateCart = async (arr)=>{
    arr.forEach(item=>{
        updateCart(item)
    })
    return {
        success:true,
    }
}
module.exports.deleteCart = async (_id)=>{
    const data = await deleteCart(_id);
	if(data.deletedCount === 1) {
		return { msg: '删除成功', success: true }
	}
	return { msg: '删除失败', success: false }}