<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="月度" name="monthly">
        <monthly-sales
        :monthlySales="singleShop.chartsData.monthlySales"
        :monthlySalesRank="singleShop.chartsData.monthlySalesRank"
        ></monthly-sales>
      </el-tab-pane>
      <el-tab-pane label="日度" name="daily">
        <daily-sales
        :dailySales="singleShop.chartsData.dailySales"
        :dailySalesRank="singleShop.chartsData.dailySalesRank"
        ></daily-sales>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DailySales from "./DailySales";
import MonthlySales from "./MonthlySales";

import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("shops");
export default {
  components: {
    DailySales,
    MonthlySales,
  },
  data() {
    return {
      activeName: "monthly",
    };
  },
  computed: {
    ...mapGetters(["singleShop"]),
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>