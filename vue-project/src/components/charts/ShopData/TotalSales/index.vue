<template>
  <shop-common-card title="今日销售额" :value="charts[charts.length-1]">
    <template>
      <div>
        <div class="compare">
          <span>日同比</span>
          <span>{{dayCompare}}%</span>
          <div :class="{increase:dayCompare>=0,decrease:dayCompare<0}"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span>{{monthCompare}}%</span>
          <div :class="{increase:monthCompare>=0,decrease:monthCompare<0}"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥{{charts[charts.length-2]}}</span>
    </template>
  </shop-common-card>
</template>


<script>
import ShopCommonCard from "../../CommonCards/ShopCommonCard";
export default {
  props: {
    dailySales: Array,
    monthlySales: Array,
  },
  data() {
    return {
      charts: this.dailySales,
      mcharts: this.monthlySales,
    };
  },
  computed: {
    dayCompare() {
      let l = this.charts[this.charts.length - 1];
      let p = this.charts[this.charts.length - 2];
      let num = ((l - p) / l) * 100;
      num = num.toFixed(2);
      return num;
    },
    monthCompare() {
      let l = this.mcharts[this.mcharts.length - 1];
      let p = this.mcharts[this.mcharts.length - 2];
      let num = ((l - p) / l) * 100;
      num = num.toFixed(2);
      return num;
    },
  },
  created() {},
  components: {
    ShopCommonCard,
  },
};
</script>

<style lang="scss" scoped>
.compare {
  font-size: 12px;
  display: flex;
  align-items: center;
  .increase {
    width: 0;
    height: 0;
    border-width: 3px;
    border-color: transparent transparent red transparent;
    border-style: solid;
    margin: -3px 0 0 3px;
  }
  .decrease {
    width: 0;
    height: 0;
    border-width: 3px;
    border-color: green transparent transparent transparent;
    border-style: solid;
    margin: 0 0 -3px 3px;
  }
}
</style>