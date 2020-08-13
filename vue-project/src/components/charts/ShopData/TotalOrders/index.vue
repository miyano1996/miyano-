<template>
  <shop-common-card title="累计订单量" value="23223">
    <template>
      <div id="total-orders-charts" :style="{width:'100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日成交量 </span>
      <span class="emphasis">2000</span>
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
    const chartsDom = document.getElementById("total-orders-charts");
    const chart = this.$echarts.init(chartsDom);
    chart.setOption({
      xAxis: {
        type: "category",
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [320, 132, 101, 244, 231, 134, 90, 230, 210],
          areaStyle: {
            color: "purple",
          },
          lineStyle: {
            width: 0,
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true,
        },
      ],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
  },
};
</script>

<style>
</style>