<template>
  <div id="orders">
    <el-table
      :data="orders.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())
      ||data.age.toLowerCase().includes(search.toLowerCase())||data.sex.toLowerCase().includes(search.toLowerCase())
      ||data.classid.name.toLowerCase().includes(search.toLowerCase())||
      data.classid.teacherid.name.toLowerCase().includes(search.toLowerCase()))"
      stripe
      style="width:95%; "
      height="710px"
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
      <el-table-column align="center" prop="userId.name" label="用户名称" width="250"></el-table-column>
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
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.pagenum-0"
        :page-size="page.datanum-0"
        layout="total, prev, pager, next, jumper"
        :total="allnum"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "orders"
);
const { mapState: mapStates } = createNamespacedHelpers("shops");
export default {
  data() {
    return {
      search: "",
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    ...mapActions(["getAllOrders", "delOrder"]),
    ...mapMutations(["changedatanum", "changepagenum"]),
    getOrders() {
      this.getAllOrders(this.shopsId);
    },
    async delit(id) {
      let { msg } = await this.delOrder({ id, success: true });
      if (msg.success) {
        this.$message({
          message: "删除成功,可在订单还原处恢复",
          type: "success",
        });
        this.getOrders();
      } else {
        alert("删除失败");
      }
    },
    handleSizeChange(val) {
      this.changedatanum(val);
      this.getOrders();
    },
    handleCurrentChange(val) {
      this.changepagenum(val);
      this.getOrders();
    },
  },
  computed: {
    ...mapState(["orders", "page", "allnum", "lastpage"]),
    ...mapStates(["shopsId"]),
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
#orders .block {
  display: flex;
  justify-content: center;
}
</style>