var express = require('express');
var router = express.Router();
const {uploadFiles}=require('../utils/handleFiles.js');

router.post('/upload',function(req, res, next) {
  //图片配置相关信息  uploadfiles对象对应  保存图片目录  图片前端接口  图片大小限制
  const upload=uploadFiles({
    path:'./public/imgtemp',//相对于app.js文件  图片保存路径  这个用于临时保存
    key:'file'
  });
  upload(req,res,(err)=>{
    if(err){
      console.log('图片上传失败',err);
    }else{
      console.log('图片上传成功');
      res.send({
        msg:'图片上传成功',
        success:true,
        // filename:req.files[0].filename,//上传的图片名称  单张图片
        filename:req.files.map(isme=>isme.filename),//上传的from表单对象，里面包括了图片名称等相关信息，是个数组对象  多张图片  只需要图片名称
      });
      // console.log(req.files)
    }
  }) 
});

module.exports = router;
