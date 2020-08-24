<template>
  <el-row :gutter="20">
    <el-col :span="4" v-for="item of AllGoods" :key="item._id">
      <good-card 
      :title="item.name" 
      :price="item.price" 
      :image="item.image"
      :goodIdProp="item._id"
      ></good-card>
    </el-col>
  </el-row>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("goods");
import GoodCard from "./GoodCard";
export default {
  components: {
    GoodCard,
  },
  async created() {
    await this.userGetAllGoods();
  },
  computed: {
    ...mapState(["AllGoods"]),
  },
  methods: {
    ...mapActions(["userGetAllGoods"]),
  },
};
</script>

<style>
</style>