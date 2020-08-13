const { findAllGoods, findGood, addGood, updateGood, delGood } = require('../dao/goodsDao');
const { uploadFiles, moveFiles, removeFiles } = require('../utils/handleFiles');

module.exports.addGood = async function(data) {
    await addGood(data);
    let msg = await findGood(data);
    if (msg.data.length > 0) {
        moveFiles({
            filename: data.image
        });
        removeFiles()
        return {
            success: true
        }
    } else {
        return {
            success: false
        }
    }
};
module.exports.findAllGoods = async function() {
    let msg = await findAllGoods();
    if (msg.data.length > 0) {
        return {
            data: msg,
            success: true
        }
    } else {
        return {
            data: null,
            success: false
        }
    }
};
module.exports.delGood = async function(data) {
    let msg = await delGood(data);
    if (msg.n == 1) {
        return {
            success: true
        }
    } else {
        return {
            success: false
        }
    }
};
module.exports.findGood = async function(data) {
    let msg = await findGood(data);
    if (msg.data.length > 0) {
        return {
            data: msg,
            success: true
        }
    } else {
        return {
            data: null,
            success: false
        }
    }
};
module.exports.updateGood = async function(data) {
    await updateGood(data);
    let msg = await findGood(data);
    if (msg.data.length > 0) {
        return {
            success: true
        }
    } else {
        return {
            success: false
        }
    }
};