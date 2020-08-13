const {shopsModel} = require('../models/shopsModel.js');

module.exports.getShops = async obj=>{
    return await shopsModel.find(obj);
}

module.exports.changeState = async obj=>{
    return await shopsModel.updateOne({_id:obj._id},{status:obj.status});
}