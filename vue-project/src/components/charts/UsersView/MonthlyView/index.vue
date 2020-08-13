
<template>
  <div id="monthly-view" ></div>
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
    const chartsDom = document.getElementById("monthly-view");
    const myChart = this.$echarts.init(chartsDom);
    myChart.setOption({
      title: {
        text: "店铺点击量",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["店铺1", "店铺2", "店铺3", "店铺4", "店铺5"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: this.xAxisData,
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "店铺1",
          type: "line",
          stack: "总量",
          data: [1120, 1132, 1101, 1314, 901, 1230],
        },
        {
          name: "店铺2",
          type: "line",
          stack: "总量",
          data: [1220, 1182, 1191, 1234, 2190, 3130],
        },
        {
          name: "店铺3",
          type: "line",
          stack: "总量",
          data: [1350, 2232, 2201, 2154, 2190, 2330],
        },
        {
          name: "店铺4",
          type: "line",
          stack: "总量",
          data: [3320, 3332, 3301, 3334, 3390, 3330],
        },
        {
          name: "店铺5",
          type: "line",
          stack: "总量",
          data: [8120, 9132, 9301, 9034, 12900, 13300],
        },
      ],
    });
  },
  methods: {
    getMonths() {
      let datelist = [];
      let date = new Date();
      let Y = date.getFullYear();
      let M = date.getMonth();
      for (let i = 0; i < 6; i++) {
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

<style scope>
#monthly-view {
  width: 1200px;
  height: 300px;
}
</style>