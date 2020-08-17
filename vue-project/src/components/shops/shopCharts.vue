<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>数据总览</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <shop-data></shop-data>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>销售专项</span>
      </div>
      <shop-sales></shop-sales>
    </el-card>
    <!-- <type-sales></type-sales> -->
  </div>
</template>

<script>
import ShopData from "../charts/ShopData/ShopData";
import ShopSales from "../charts/ShopSales/ShopSales";
import TypeSales from "../charts/ShopSales/TypeSales";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  components: {
    ShopData,
    ShopSales,
    TypeSales,
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  margin-bottom: 50px;
}
</style>