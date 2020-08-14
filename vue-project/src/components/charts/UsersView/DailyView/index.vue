
<template>
  <div id="daily-view"></div>
</template>

<script>
export default {
  props: {
    chartsData: Array,
  },
  data() {
    return {
      xAxisData: [],
      legendData: [],
      seriesData: [],
    };
  },
  watch: {
    chartsData: function () {
      this.getLegendData();
      this.getSeriesData();
      this.renderCharts();
    },
  },
  created() {
    this.getDays();
  },
  mounted() {},
  methods: {
    renderCharts() {

      const chartsDom = document.getElementById("daily-view");
      const myChart = this.$echarts.init(chartsDom);
      myChart.setOption({
        
        title: {
          text: "店铺访问量",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: this.legendData,
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
        series: this.seriesData,
      });
    },
    getDays() {
      //设置日期，当前日期的前七天
      var myDate = new Date(); //获取今天日期
      myDate.setDate(myDate.getDate() - 7);
      var dateArray = [];
      var dateTemp;
      var flag = 1;
      for (var i = 0; i < 7; i++) {
        dateTemp = myDate.getMonth() + 1 + "月" + myDate.getDate() + "日";
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
      }
      this.xAxisData = dateArray;
    },
    getLegendData() {
      const arr = [];
      this.chartsData.forEach((item) => {
        arr.push(item.name);
      });
      this.legendData = arr;

    },
    getSeriesData() {
      const arr = [];
      this.chartsData.forEach((item) => {
        arr.push({
          name: item.name,
          type: "line",
          smooth: true,
          stack: "总量",
          data: item.chartsData.dailyViews.slice(item.chartsData.dailyViews.length-7),
        });
      });
      this.seriesData = arr;
    },
  },
};
</script>

<style scope>
#daily-view {
  width: 1400px;
  height: 300px;
}
</style>