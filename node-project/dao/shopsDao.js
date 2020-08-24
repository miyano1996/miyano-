const { shopsModel } = require('./../dao/models/shopsModel');
module.exports.getShops = async data => {
    // console.log(data);
    return await shopsModel.find({ managerId: data.managerId })
}
module.exports.addShops = async data => {
    // console.log(data);
    return await shopsModel.create(data)
}
module.exports.delShops = async data=>{
    // console.log(data);
    return await shopsModel.updateOne(data,{status:'2'})
}
module.exports.updateShops = async data => {
    // console.log(data);
    return await shopsModel.updateOne({ _id: data._id }, { ...data });
}
module.exports.getOneShop = async _id => {
    console.log(_id)
    return await shopsModel.find({ _id })
}
module.exports.addShopView = async data =>{
    console.log({data})
    const arr = await shopsModel.updateOne({_id:data._id},{...data})
    
}