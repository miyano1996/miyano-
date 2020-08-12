<!-- 侧边栏-->
<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        width="300px"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-house"></i>
            <span>首页</span>
          </template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>商品中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">商品列表</el-menu-item>
            <el-menu-item index="/main/addGood">添加商品</el-menu-item>
            <el-menu-item index="2-2">商品分类</el-menu-item>
            <el-menu-item index="2-2">品牌管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">订单列表</el-menu-item>
            <el-menu-item index="3-2">订单设置</el-menu-item>
            <el-menu-item index="3-2">退货申请处理</el-menu-item>
            <el-menu-item index="3-2">退货原因设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-marketing"></i>
            <span>营销</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">活动管理</el-menu-item>
            <el-menu-item index="4-2">专场活动</el-menu-item>
            <el-menu-item index="4-2">促销专区</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-key"></i>
            <span>权限</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">系统管理</el-menu-item>
            <el-menu-item index="5-2">店铺管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.el-col {
  width: 100%;
}
</style>
