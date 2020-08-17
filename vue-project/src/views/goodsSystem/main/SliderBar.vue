<!-- 侧边栏-->
<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#1e1e1e"
        active-text-color="#f6dca1"
        width="300px"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-house"></i>
            <span>首页</span>
          </template>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>我的店铺</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/myShops">所有店铺</el-menu-item>
            <el-menu-item index="/updateShops">修改店铺信息</el-menu-item>
            <el-menu-item index="/addShops">新增店铺</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2" v-if="shopsId">
          <template slot="title" >
            <i class="el-icon-goods"></i>
            <span>商品中心</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/main/shopCharts">店铺数据</el-menu-item>
            <el-menu-item index="/main/goodsList" >商品列表</el-menu-item>
            <el-menu-item index="/main/addGood">添加商品</el-menu-item>
            <el-menu-item index="2-2">商品分类</el-menu-item>
            <el-menu-item index="/main/notListedGoods">未上架商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3" v-if="shopsId">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/main/goodOrderList">订单列表</el-menu-item>
            <el-menu-item index="/main/recycledOrders">订单还原</el-menu-item>
            <el-menu-item index="3-3">退货申请处理</el-menu-item>
            <el-menu-item index="3-4">退货原因设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4" v-if="shopsId">
          <template slot="title">
            <i class="el-icon-s-marketing"></i>
            <span>营销</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">活动管理</el-menu-item>
            <el-menu-item index="4-2">专场活动</el-menu-item>
            <el-menu-item index="4-3">促销专区</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        
          <el-submenu index="5" :style="{'display': str}">
            <template slot="title">
              <i class="el-icon-key"></i>
              <span>管理员中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">系统管理</el-menu-item>
              <el-menu-item index="/shopManager">店铺管理</el-menu-item>
              <el-menu-item index="5-3">用户管理</el-menu-item>
              <el-menu-item index="5-4">产品管理</el-menu-item>
              <el-menu-item index="/messageCenter">消息中心</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shops");

export default {
  data() {
    return {
      isAdmin: false,
      str:'none'
    };
  },
  computed:{
    ...mapState(['shopsId'])
  },
  created() {
    this.checkAdmin();
  },
  methods: {
    checkAdmin() {
      this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
      if(this.isAdmin){
        this.str = 'block'
      }else{
        this.str = 'none'
      }
    },
  },
};
</script>

<style scoped>
.el-col {
  width: 240px;
  
}
</style>
