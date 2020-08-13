<template>
  <shop-common-card title="信用分" value="650">
    <template>
      <div id="credit-points-charts" :style="{width:'100%',height:'100%'}"></div>
    </template>
        <template v-slot:footer>
      <span>昨日好评率 </span>
      <span class="emphasis">95%</span>
    </template>
  </shop-common-card>
</template>


<script>
import ShopCommonCard from "../../CommonCards/ShopCommonCard";
export default {
  components: {
    ShopCommonCard,
  },

  mounted() {
    const chartsDom = document.getElementById("credit-points-charts");
    const chart = this.$echarts.init(chartsDom);
    chart.setOption({
      xAxis: {
        type: "value",
        show: false,
      },
      yAxis: {
        type: "category",
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [650],
          barWidth: 10,
          itemStyle: {
            color: "#45c946",
          },
          stack: "总量",
        },
        {
          type: "bar",
          data: [800],
          itemStyle: {
            color: "#ccc",
          },
          stack: "总量",
        },
        {
          type: "custom",
          data: [650],
          stack: "总量",
          renderItem: (params, api) => {
            const value = api.value(0);
            const endPoint = api.coord([value, 0]);
            return {
              type: "group",
              position: endPoint,
              children: [
                {
                  type:'path',
                  shape: {
                    d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
                    x: -5,
                    y: 5,
                    width: 10,
                    height: 10,
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
                {
                  type:'path',
                  shape: {
                    d: "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",
                    x: -5,
                    y: -15,
                    width: 10,
                    height: 10,
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
              ],
            };
          },
        },
      ],
      grid: {
        top:0,
        left:0,
        bottom:0,
        right:0
      },
    });
  },
};
</script>

<style>
</style>
