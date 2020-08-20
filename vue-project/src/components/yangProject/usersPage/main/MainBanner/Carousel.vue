<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item>
        <img src="../../../../../assets/yangSrc/images/carousel1.jpg" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../../../../assets/yangSrc/images/carousel2.jpg" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../../../../assets/yangSrc/images/carousel3.jpg" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../../../../assets/yangSrc/images/carousel4.png" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.el-carousel{
  margin-right: -20px;
}
.el-carousel__item {
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>