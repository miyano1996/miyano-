<!--
 * @Author: your name
 * @Date: 2020-08-11 17:10:51
 * @LastEditTime: 2020-08-11 18:00:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\vue-project\src\components\Goodslist.vue
-->
<template>
  <el-row :gutter="20" style="margin:0px">
    <el-col :span="24" class="search">
      <div class="input">
        <input type="text" placeholder="输入商品" id="saerch" />
        <span></span>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="list">
        <i>
          <img src="../../assets/商品图片.jpg" alt />
        </i>
        <strong>VUE.js</strong>
        <div class="box">
          <span class="price">￥255454564</span>
          <span class="stock">库存:5565件</span>
        </div>
        <p class="btn">
          <span class>上架商品</span>
          <span class="activegoods">下架商品</span>
        </p>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="list">
        <i>
          <img src="../../assets/商品图片.jpg" alt />
        </i>
        <strong>商品名称</strong>
        <div class="box">
          <span class="price">商品价格</span>
          <span class="stock">库存:5565件</span>
        </div>
        <p class="btn">
          <span class>上架商品</span>
          <span class="activegoods">下架商品</span>
        </p>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="list">
        <i>
          <img src="../../assets/商品图片.jpg" alt />
        </i>
        <strong>商品名称</strong>
        <div class="box">
          <span class="price">商品价格</span>
          <span class="stock">库存:5565件</span>
        </div>
        <p class="btn">
          <span class>上架商品</span>
          <span class="activegoods">下架商品</span>
        </p>
      </div>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style scoped>
.list .box {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.list .box .stock {
  font-size: 12px;
  margin-right: 5px;
  color: rgb(107, 107, 107);
}
.el-row {
  background: rgb(248, 248, 248);
}
.el-col {
  display: flex;
  justify-content: center;
}
.search {
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: white;
  margin-bottom: 30px;
}
input {
  outline: none;
  width: 220px;
  border-radius: 0;
  border: 2px solid rgb(243, 58, 58);
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: rgb(53, 53, 53);
}
input::placeholder {
  font-size: 14px;
}
.input {
  height: 34px;
}
.input span {
  display: inline-block;
  width: 36px;
  height: 36px;
  background: rgb(243, 58, 58) url("../../assets/搜索.png") no-repeat center
    center;
  background-size: 18px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.input span:hover {
  background: rgb(228, 59, 59) url("../../assets/搜索.png") no-repeat center
    center;
  background-size: 18px;
}
.list {
  list-style: none;
  background: white;
  width: 210px;
  box-sizing: border-box;
  height: 320px;
  border-radius: 2px;
  box-shadow: 0 0 10px rgb(185, 185, 185);
  overflow: hidden;
}
.list i {
  display: block;
  box-sizing: border-box;
  padding: 5px 5px 0 5px;
  width: 100%;
  overflow: hidden;
}
.list i img {
  width: 200px;
  transition: 0.3s;
}
.list i img:hover {
  transform: scale(1.2);
}
.list p {
  margin: 0;
  height: 35px;
  display: flex;
}
.list p span {
  display: block;
  width: 50%;
  line-height: 35px;
  background: rgb(255, 0, 51);
  color: white;
}
.list .activegoods {
  background: rgb(189, 189, 189);
}
.list .btn {
  text-align: center;
  margin-top: 14px;
}
strong {
  margin: 10px 0;
  display: block;
  margin-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list .price {
  color: rgb(231, 29, 46);
  margin-left: 5px;
}
</style>