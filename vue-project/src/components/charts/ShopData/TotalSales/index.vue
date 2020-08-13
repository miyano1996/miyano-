<template>
  <shop-common-card title="今日销售额" value="334332">
    <template>
      <div>
        <div class="compare">
          <span>日同比</span>
          <span>4.24%</span>
          <div class="increase"></div>

        </div>
        <div class="compare">
          <span>日同比</span>
          <span>4.24%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥300000</span>
    </template>
  </shop-common-card>
</template>


<script>
import ShopCommonCard from "../../CommonCards/ShopCommonCard";
export default {
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
    
  }
  .decrease {
    width: 0;
    height: 0;
    border-width: 3px;
    border-color: green transparent transparent transparent;
    border-style: solid;
  }
}
</style>