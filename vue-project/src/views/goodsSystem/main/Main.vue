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
  display: flex;
}
.system-container .main-sidebar {
  width: 16%;
  border-right: 2px solid #ccc;
}
.system-container .main-content{
  box-sizing: border-box;
}
.system-container .main-content {
  width: 84%;
  padding: 10px;
}
</style>