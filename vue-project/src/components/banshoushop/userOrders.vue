<template>
  <div class="shopcar-body">
    <h1 style="text-align:center; border-bottom:1px solid #efefef ;padding:10px">我的订单</h1>
    <el-table
      :data="orders.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())
      ||data.age.toLowerCase().includes(search.toLowerCase())||data.sex.toLowerCase().includes(search.toLowerCase())
      ||data.classid.name.toLowerCase().includes(search.toLowerCase())||
      data.classid.teacherid.name.toLowerCase().includes(search.toLowerCase()))"
      stripe
      style="width:100%;min-height:600px"
    >
      <el-table-column align="center" label="商品图片" width="200">
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="'http://localhost:3000/images/'+scope.row.goodId.image"
            fit="cover"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="goodId.name" label="商品名称" width="150"></el-table-column>d
      <el-table-column align="center" prop="_id" label="订单编号" width="250"></el-table-column>
      <el-table-column align="center" prop="goodId.price" label="价格" width="150"></el-table-column>
      <el-table-column align="center" prop="num" label="数量" width="150"></el-table-column>
      <el-table-column align="center" label="总计" width="150">
        <template slot-scope="scope">
          <p>{{scope.row.num*scope.row.goodId.price}}元</p>
        </template>
      </el-table-column>
      <el-table-column align="center" fixed="right" label="操作" width="150">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" :value="scope" />
        </template>
        <template slot-scope="scope">
          <el-button @click="delit(scope.row._id)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "orders"
);
export default {
  data() {
    return { search: "" };
  },
  created() {
    this.getUserOrders(localStorage.userId);
  },
  methods: {
    ...mapActions(["getUserOrders", "delCarOrder"]),
    async delit(id) {
      await this.delCarOrder(id);
      this.$message({
        message: "删除成功",
        type: "success",
      });
      this.getUserOrders(localStorage.userId);
    },
  },
  computed: {
    ...mapState(["orders"]),
  },
};
</script>

<style>
</style>