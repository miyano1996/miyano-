<template>
  <shop-common-card title="累计订单量" :value="total">
    <template>
      <div id="total-orders-charts" :style="{width:'100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日成交量</span>
      <span class="emphasis">{{yesterdayOrder}}</span>
    </template>
  </shop-common-card>
</template>

<script>
import ShopCommonCard from "../../CommonCards/ShopCommonCard";
export default {
  props: {
    totalOrders: Array,
  },
  data() {
    return {
      chartsData: this.totalOrders,
      yesterdayOrder:this.totalOrders[ this.totalOrders.length-2]
    };
  },
  computed: {
    total() {
      return this.chartsData.reduce((t, item) => (t += item), 0);
    },
  },
  components: {
    ShopCommonCard,
  },
  mounted() {
    const chartsDom = document.getElementById("total-orders-charts");
    const chart = this.$echarts.init(chartsDom);
    chart.setOption({
      tooltip: {
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
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
          data: this.chartsData,
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