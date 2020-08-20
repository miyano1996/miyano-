<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <good-card></good-card>
    </el-col>
  </el-row>
 
</template>

<script>
import GoodCard from "./GoodCard";
export default {
  components: {
    GoodCard,
  },
};
</script>

<style>
</style>