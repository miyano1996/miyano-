<template>
  <shop-common-card title="今日交易用户数" :value="chartsData[chartsData.length-1]">
    <template>
      <div id="today-users-charts" :style="{width:'100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.12%</span>
    </template>
  </shop-common-card>
</template>

<script>
import ShopCommonCard from "../../CommonCards/ShopCommonCard";
export default {
  props:{
    todayUsers:Array
  },
  data(){
    return {
      chartsData:this.todayUsers
    }
  },
  components: {
    ShopCommonCard,
  },
  mounted() {
    const chartsDom = document.getElementById("today-users-charts");
    const chart = this.$echarts.init(chartsDom);
    chart.setOption({
        tooltip:{},
        color:['#3398DB'],
        series:[{
            type:'bar',
            data:this.chartsData,
            barWidth:'60%'
        }],
        xAxis:{
            type:'category',
            data:['00:00',"01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00"],
            show:false
        },
        yAxis:{
            show:false
        },
        grid:{
            top:0,
            bottom:0,
            left:0,
            right:0
        }
    })
  },
};
</script>

<style>
</style>