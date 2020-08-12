const { getShops } = require('../dao/shopsDao')
module.exports.getShops = async data => {
    return await getShops(data)
}