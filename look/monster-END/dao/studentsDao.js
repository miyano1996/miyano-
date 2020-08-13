//读取数据模型  模型js模块会暴露模型名字
const { studentsModel } = require("./models/studentsModel.js");
//渲染页面
module.exports.first = async ({ size, index }) => {
  //统计数据总数
  const sum = await studentsModel.countDocuments();
  //总页数
  const sumPage = Math.ceil(sum / size);
  //渲染页面  需要找到所有   加上班级和教师嵌套关联查询
  //  return await studentsModel.find().populate('classId');
  const rows = await studentsModel
    .find()
    .populate({
      path: "classId",
      populate: {
        path: "teachersId",
      },
    })
    .limit(size - 0) //控制显示个数  -0转化为数值型
    .skip((index - 1) * size); //控制跳过个数  相当于控制页数
  //将搜索的数据 总页数 总共数据 当前页数  当前显示个数返回
  return { rows, sum, sumPage, size, index };
};
//搜索功能   传参解构
module.exports.search = async ({ type, value, size, index }) => {
   //统计数据总数  查找的结果长度就是总数
   const sum =(await studentsModel.find({ [type]: { $regex: value, $options: "$i" }})).length;
   //总页数
   const sumPage = Math.ceil(sum / size);
  //动用正则   模糊查询
  const rows = await studentsModel
    //要找的类型  要找的内容
    .find({ [type]: { $regex: value, $options: "$i" } })
    .populate({
      path: "classId",
      populate: {
        path: "teachersId",
      },
    })
    .limit(size - 0) //控制显示个数  -0转化为数值型
    .skip((index - 1) * size); //控制跳过个数  相当于控制页数
  return { rows, sum, sumPage, size, index };
};

//删除学生
module.exports.Del = async (data) => {
  //删除数据库
  return await studentsModel.deleteOne(data);
};

//添加学生
module.exports.Add = async (data) => {
  //添加数据库
  return await studentsModel.create(data);
};

//修改学生第一步
module.exports.upDataOne = async (data) => {
  //查找数据库
  return await studentsModel.find(data);
};

//修改学生第二步
module.exports.upDataTwo = async ({ _id, name, age, sex }) => {
  //修改数据库
  return await studentsModel.updateOne({ _id }, { name, age, sex });
};
