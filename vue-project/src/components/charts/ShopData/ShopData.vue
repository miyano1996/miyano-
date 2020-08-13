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
import TotalSales from "./TotalSales/";
import TotalOrders from "./TotalOrders";
import TodayUsers from "./TodayUsers";
import CreditPoints from "./CreditPoints";
export default {
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    CreditPoints,
  },
};
</script>

<style scoped>
.el-row,
.el-col {
  height: 100%;
}
</style>