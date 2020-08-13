
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="月度" name="monthly"><monthly-view></monthly-view></el-tab-pane>
    <el-tab-pane label="日度" name="daily"><daily-view></daily-view></el-tab-pane>
  </el-tabs>
</template>
<script>
import DailyView from "./DailyView";
import MonthlyView from "./MonthlyView";
export default {
  components: {
    DailyView,
    MonthlyView,
  },
  data() {
    return {
      activeName: "daily",
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>

</style>