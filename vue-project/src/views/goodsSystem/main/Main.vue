<!-- 内容区主体-->
<template>
  <div class="system-container">
    <div class="main-sidebar">
      <!--侧边栏 -->
      <SliderBar />
    </div>
    <div class="main-content">
      <!--内容区 -->
      <router-view />
    </div>
  </div>
</template>

<script>
import SliderBar from "./SliderBar.vue";
export default {
  components: {
    SliderBar,
  },
};
</script>

<style scoped>
.system-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
}
.system-container .main-sidebar {
  width: 240px;
  border-right: 1px solid #ccc;
}
.system-container .main-content {
  width: 84%;
  background: rgb(225, 225, 225);
  background-color: white;
  padding: 20px;
}
</style>