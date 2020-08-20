<template>
<div>
  <main-banner></main-banner>
  <goods-container></goods-container>
</div>
</template>

<script>
import MainBanner from "./MainBanner";
import GoodsContainer from './GoodsContainer/index'
export default {
  components: {
    MainBanner,GoodsContainer
  },
};
</script>

<style lang="scss" scoped>
</style>