const { shopsModel } = require('./../dao/models/shopsModel');
module.exports.getShops = async data=>{
    // console.log(data);
    return await shopsModel.find()
}