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
        <shop-sales></shop-sales>
        <type-sales></type-sales>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SliderBar from './SliderBar.vue'
import UsersViewCharts from '../../../components/charts/UsersView/UsersViewCharts'
import ShopData from '../../../components/charts/ShopData/ShopData'
import ShopSales from '../../../components/charts/ShopSales/ShopSales'
import TypeSales from '../../../components/charts/ShopSales/TypeSales'
export default {
    components:{
        SliderBar,UsersViewCharts,ShopData,ShopSales,TypeSales
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