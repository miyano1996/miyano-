const {shopsModel} = require('../models/shopsModel.js');


module.exports.getShops = async (obj)=>{
    console.log('我是obj',obj);
    const{params,pageSize,currentPage} = obj
    const newParams = JSON.parse(params);

    const counts = await shopsModel.find(newParams);
    const total = counts.length;
    const totalPage = Math.ceil(total/pageSize);
    const row =  await shopsModel.find(newParams)
    .limit(pageSize - 0)
    .skip((currentPage-1)*pageSize)

    return {total,totalPage,row,pageSize,currentPage}
}

module.exports.changeState = async obj=>{
    return await shopsModel.updateOne({_id:obj._id},{status:obj.status});
}

module.exports.changeCredit = async obj=>{
    return await shopsModel.updateOne({_id:obj._id},{credit:obj.credit})
}

module.exports.changeLift = async obj=>{
    return await shopsModel.updateOne({_id:obj._id},{isLift:obj.isLift})
}