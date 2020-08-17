<template>
  <div id="shop-data">
    <el-row :gutter="20">
      <el-col :span="6">
        <total-sales></total-sales>
      </el-col>
      <el-col :span="6">
        <total-orders></total-orders>
      </el-col>
      <el-col :span="6">
        <today-users></today-users>
      </el-col>
      <el-col :span="6">
        <credit-points></credit-points>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import TotalSales from "./TotalSales/";
import TotalOrders from "./TotalOrders";
import TodayUsers from "./TodayUsers";
import CreditPoints from "./CreditPoints";
const {  mapActions } = createNamespacedHelpers("shops");
export default {
  data(){
    return{
      // dailySales:[],
      // totalOrders:[],
      // todayUsers:[],
      // creditPoints:""
    }
  },
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    CreditPoints,
  },
  async created(){
    //此处为请求表格数据 报错来源
    // const shopData = await this.getOwnShopsSync('5f335ec79a560000630005c3').data

    // this.dailySales = shopData.chartsData.dailySales;
    // this.totalOrders = shopData.chartsData.totalOrders;
    // this.todayUsers = shopData.chartsData.todayUsers;
    // this.creditPoints = shopData.chartsData.creditPoints;
    // console.log(shopData)
    
  },
  methods:{
    ...mapActions(['getOwnShopsSync']),
  }
};
</script>

<style scoped>
.el-row,
.el-col {
  height: 100%;
}
</style>