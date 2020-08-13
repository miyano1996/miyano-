
<template>
  <div id="daily-view"></div>
</template>

<script>
export default {
  data(){
    return {
      xAxisData:[]
    }
  },
  created(){
    this.getDays()
  },
  mounted() {
    const chartsDom = document.getElementById("daily-view");
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
        splitLine:{
          show:false
        }
      },
      series: [
        {
          name: "店铺1",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "店铺2",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "店铺3",
          type: "line",
          stack: "总量",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "店铺4",
          type: "line",
          stack: "总量",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "店铺5",
          type: "line",
          stack: "总量",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    });
  },
  methods: {
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
      this.xAxisData = dateArray
    },
  },
};
</script>

<style scope>
#daily-view {
  width: 1200px;
  height: 300px;
}
</style>