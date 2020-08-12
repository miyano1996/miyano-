const { ordersModel } = require('./models/ordersModels');

module.exports.addOrder = async function(data) {
    await ordersModel.create(data);
};

module.exports.addOrder = async function(data) {
    await ordersModel.create(data);
};