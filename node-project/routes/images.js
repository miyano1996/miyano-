var express = require('express');
var router = express.Router();
const { uploadFiles } = require('../utils/handleFiles.js');

/* GET home page. */
router.post('/upload', function(req, res, next) {
    const upload = uploadFiles();
    upload(req, res, (err) => {
        if (err) {
            res.send({
                msg: '图片上传失败,图片过大',
                success: false,
                filename: null
            })
        } else {
            res.send({
                msg: '图片上传成功',
                success: true,
                filename: req.files.map(item => item.filename)
            })
        }
    });
});

module.exports = router;