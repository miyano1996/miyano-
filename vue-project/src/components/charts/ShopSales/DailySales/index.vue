<template>
  <div class="container">
    <div class="chart">
      <div id="daily-sales-charts"></div>
    </div>
    <div class="rank">
        <span class="rankTitle">销售排行</span>
      <el-card class="box-card" shadow="hidden">
        <div v-for="(item,index) in dailySalesRank" :key="index" class="text item">{{(index+1)+'.' + item }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    dailySales:Array,
    dailySalesRank:Array
  },
  data() {
    return {
      xAxisData: [],
    };
  },
  created() {
    this.getDays();
  },
  mounted() {
    const chartsDom = document.getElementById("daily-sales-charts");
    const chart = this.$echarts.init(chartsDom);
    chart.setOption({
      tooltip: {},
      color: ["#3398DB"],
      series: [
        {
          name: "销售额",
          type: "bar",
          data: this.dailySales,
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
    getDays() {
      //设置日期，当前日期的前15天
      var myDate = new Date(); //获取今天日期
      myDate.setDate(myDate.getDate() - 15);
      var dateArray = [];
      var dateTemp;
      var flag = 1;
      for (var i = 0; i < 15; i++) {
        dateTemp = myDate.getMonth() + 1 + "月" + myDate.getDate() + "日";
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
      }
      this.xAxisData = dateArray;
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
    #daily-sales-charts {
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