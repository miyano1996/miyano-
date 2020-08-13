<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane label="月度" name="monthly"><monthly-sales></monthly-sales></el-tab-pane>
      <el-tab-pane label="日度" name="daily"><daily-sales></daily-sales></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DailySales from './DailySales';
import MonthlySales from './MonthlySales';


export default {
  components:{
    DailySales,MonthlySales,
  },
  data() {
    return {
      activeName: "monthly",
    };
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