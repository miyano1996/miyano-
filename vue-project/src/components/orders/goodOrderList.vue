<template>
  <div id="orders">
    <el-table
      :data="orders.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())
      ||data.age.toLowerCase().includes(search.toLowerCase())||data.sex.toLowerCase().includes(search.toLowerCase())
      ||data.classid.name.toLowerCase().includes(search.toLowerCase())||
      data.classid.teacherid.name.toLowerCase().includes(search.toLowerCase()))"
      stripe
      style="width:95%; "
      height="600px"
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
      <el-table-column align="center" prop="goodId.name" label="商品名称" width="250"></el-table-column>
      <el-table-column align="center" prop="_id" label="订单编号" width="300"></el-table-column>
      <el-table-column align="center" label="用户名称" width="300"></el-table-column>
      <el-table-column align="center" prop="status" label="状态" width="250"></el-table-column>
      <el-table-column align="center" fixed="right" label="操作" width="200">
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
const { mapActions, mapState } = createNamespacedHelpers("orders");
export default {
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    ...mapActions(["getAllOrders"]),
    async getOrders() {
      await this.getAllOrders();
    },
    delit() {},
  },
  computed: {
    ...mapState(["orders"]),
  },
};
</script>

<style scoped>
#orders {
  width: 100%;
  min-width: 600px;
  height: 100%;
  overflow: auto;
  background-color: #efefef;
}
#orders .el-table {
  height: 95%;
  margin: 20px auto;
}
</style>