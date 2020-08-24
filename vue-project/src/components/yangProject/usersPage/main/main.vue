<template>
<div>
  <main-banner></main-banner>
  <h1>————— 品牌闪购 —————</h1>
  <div class="outless">
    <img src="../../../../assets/yangSrc/images/outless.png" alt="">
  </div>
  <h1>————— 为你推荐 —————</h1>

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
h1{
  text-align: center;
  margin: 80px 0 50px;
}
.outless{
  display: flex;
  justify-content: center;
}
</style>