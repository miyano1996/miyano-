const {shopsModel} = require('../models/shopsModel.js');

module.exports.getShops = async ()=>{
    return await shopsModel.find();
}