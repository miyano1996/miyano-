<!-- 内容区主体-->
<template>
<div class='system-container'>
    <div class='main-sidebar'>
        <!--侧边栏 -->
        <SliderBar/>
    </div>
    <div class='main-content'>
        <!--内容区 -->
        <users-view-charts></users-view-charts>
        <shop-data></shop-data>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SliderBar from './SliderBar.vue'
import UsersViewCharts from '../../../components/charts/UsersView/UsersViewCharts'
import ShopData from '../../../components/charts/ShopData/ShopData'
export default {
    components:{
        SliderBar,UsersViewCharts,ShopData
    }
}
</script>

<style scoped>
.system-container{
  width: 100%;
  display: flex;
}
.system-container .main-sidebar{
  width: 16%;
  border-right: 2px solid #ccc;
}
.system-container .main-content{
  width: 84%;
}
</style>