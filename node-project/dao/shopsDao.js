const { shopsModel } = require('./../dao/models/shopsModel');
module.exports.getShops = async data=>{
    // console.log(data);
    return await shopsModel.find()
}
module.exports.addShops = async data=>{
    // console.log(data);
    return await shopsModel.create(data)
}
module.exports.delShops = async data=>{
    return await shopsModel.deleteOne(data)
}