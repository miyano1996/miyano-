
<template>
  <div id="monthly-view"></div>
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
    this.getMonths();
  },

  methods: {
        renderCharts() {

      const chartsDom = document.getElementById("monthly-view");
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
          stack: "总量",
          smooth:true,
          data: item.chartsData.monthlyViews.slice(item.chartsData.monthlyViews.length-6)
        });
      });
      this.seriesData = arr;
    },
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
  width: 1400px;
  height: 300px;
}
</style>