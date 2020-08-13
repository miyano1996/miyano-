<template>
  <div class="container">
    <div class="chart">
      <div id="monthly-sales-charts"></div>
    </div>
    <div class="rank">
        <span class="rankTitle">销售排行</span>
      <el-card class="box-card" shadow="hidden">
        <div v-for="o in 5" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xAxisData: [],
    };
  },
  created() {
    this.getMonths();
  },
  mounted() {
    const chartsDom = document.getElementById("monthly-sales-charts");
    const chart = this.$echarts.init(chartsDom);
    chart.setOption({
      tooltip: {},
      color: ["#3398DB"],
      series: [
        {
          name: "销售额",
          type: "bar",
          data: [
            3410,
            382,
            2300,
            3334,
            3390,
            2323,
            3324,
            3150,
            3224,
            3111,
            3324,
            1530,
            3224,
            3111,
            3111,
          ],
          barWidth: "60%",
        },
      ],
      xAxis: {
        type: "category",
        data: this.xAxisData,
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    });
  },
  methods: {
    getMonths() {
      let datelist = [];
      let date = new Date();
      let Y = date.getFullYear();
      let M = date.getMonth();
      for (let i = 0; i < 12; i++) {
        let dateoption = "";
        if (M - 1 !== 0) {
        } else {
          M = 12;
          Y = Y - 1;
        }
        let m = M;
        m = m < 10 ? "0" + m : m;
        dateoption = Y + "/" + m;
        M--;
        datelist.push(dateoption);
      }
      this.xAxisData = datelist.reverse();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 300px;
  display: flex;
  justify-content: space-between;

  .chart {
    width: 1200px;
    height: inherit;
    #monthly-sales-charts {
      height: inherit;
      width: inherit;
    }
  }
  .rank {
    width: 380px;
    height: inherit;
    .rankTitle{
        font-size: 14px;
        line-height: 30px;
        padding-left: 5px;
    }
    .text {
      font-size: 14px;
    }
    .item {
      padding: 10px 0;
    }
    .box-card {
      width: inherit;
    }
  }
}
</style>