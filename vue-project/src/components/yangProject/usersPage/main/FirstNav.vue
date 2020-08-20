<template>
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  menu-trigger="hover"
  background-color="#383838"
  text-color="#fff"
  active-text-color="#ff491f"
  router>
  <el-menu-item index="/users/main">商城首页</el-menu-item>
  <el-menu-item>品牌秒杀</el-menu-item>
  <el-menu-item>会员服务</el-menu-item>
  <el-menu-item index="/users/vipService">配送服务</el-menu-item>
 
</el-menu>

</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>

</style>