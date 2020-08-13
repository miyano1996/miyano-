<template>
  <shop-common-card title="今日订单量" value="3332">
    <template>
      <div id="today-users-charts" :style="{width:'100%',height:'100%'}"></div>
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

<style>
</style>