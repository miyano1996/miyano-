<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#f6dca1"
      text-color="#1e1e1e"
    >
      <div class="imgBox"></div>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="#" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "http://localhost:3000/images/webstar-service.svg",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #fff;
  position: relative;
  color: #234b8d;
}
.el-menu-demo .imgBox {
  width: 180px;
  height: 80px;
  position: absolute;
  right: 500px;
  background-image: url(http://localhost:3000/images/webstar-service.svg);
  background-size: 180px 80px;
  background-position: center center;
  outline: none;
}
</style>