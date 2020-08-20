<template>
  <el-row :gutter="20">
    <el-col :span="6">
  <BannerAside/>
    </el-col>
    <el-col :span="18">
      <Carousel />
    </el-col>
  </el-row>
</template>

<script>
import BannerAside from "./BnnerAside";
import Carousel from "./Carousel";
export default {
  components: {
    Carousel,BannerAside
  },
};
</script>

<style>
</style>