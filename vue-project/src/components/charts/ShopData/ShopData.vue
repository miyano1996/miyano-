<template>
  <div id="shop-data">
    <el-row :gutter="20">
      <el-col :span="6">
        <total-sales 
        :dailySales="singleShop.chartsData.dailySales"
        :monthlySales="singleShop.chartsData.monthlySales"
        ></total-sales>
      </el-col>
      <el-col :span="6">
        <total-orders
        :totalOrders="singleShop.chartsData.totalOrders"
        ></total-orders>
      </el-col>
      <el-col :span="6">
        <today-users
        :todayUsers="singleShop.chartsData.todayUsers"
        ></today-users>
      </el-col>
      <el-col :span="6">
        <credit-points
        :creditPoints="singleShop.chartsData.creditPoints"
        ></credit-points>
      </el-col>
    </el-row>

    <div></div>
  </div>
</template>

<script>
import TotalSales from "./TotalSales/";
import TotalOrders from "./TotalOrders";
import TodayUsers from "./TodayUsers";
import CreditPoints from "./CreditPoints";

import { createNamespacedHelpers } from "vuex";
const {  mapGetters } = createNamespacedHelpers("shops");
export default {
  data(){
    return{
    }
  },
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    CreditPoints,
  },
  computed:{
    ...mapGetters(['singleShop'])
  },
};
</script>

<style scoped>
.el-row,
.el-col {
  height: 100%;
}
</style>