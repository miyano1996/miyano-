//解构接收第三层暴露的login方法   暴露的是对象格式
const {first,Del,Add,upDataOne,upDataTwo,search}=require('../dao/studentsDao.js');
//渲染页面
module.exports.first=async function({type,value,size,index}){
    //查找返回学生对象数组
    let SQL;
    //判断搜索输入框内是否有值 是否需要搜索
    if(value){//有值就更换第三层操作函数
        SQL=await search({type,value,size,index});//返回一个数组对象  搜数据
    }else{
        SQL=await first({size,index})//翻页数据
    }
    // console.log(SQL)
        return {
            msg:'学生数据请求成功',
            success:true,
            rows:SQL
        }
}
//删除学生
module.exports.Del=async function(data){
    //调用第三层
    const SQL=await Del(data);//返回{ n: 1, ok: 1, deletedCount: 1 }
    // console.log(SQL);
    if(SQL.ok===1){
        return {
            msg:'删除成功',
            success:true,
        }
    }
   return {
    msg:'删除失败',
    success:false,
   }
    
}
//添加学生
module.exports.Add=async function(data){
    //调用第三层  返回一个对象
    const SQL=await Add(data);//返回{刚刚添加的内容 }
    // console.log(SQL);
    if(SQL._id){//_有值
        return {
            msg:'添加成功',
            success:true,
        }
    }
   return {
    msg:'添加失败',
    success:false,
   }
    
}
//修改学生第一步
module.exports.upDataOne=async function(data){
    //调用第三层 
    const SQL=await upDataOne(data);//返回一个数组
    // console.log(SQL);
    if(SQL.length>0){//
        return {
            msg:'获取修改数据成功',
            success:true,
            rows:SQL
        }
    }
   return {
    msg:'获取修改数据失败',
    success:false,
   }
    
}
//修改学生第二部
module.exports.upDataTwo=async function(data){
    //调用第三层  返回一个对象
    const SQL=await upDataTwo(data);//返回{{ n: 1, nModified: 1, ok: 1 }
    // console.log(SQL);
    if(SQL.ok===1){//_有值
        return {
            msg:'修改成功',
            success:true,
        }
    }
   return {
    msg:'修改失败',
    success:false,
   }
    
}