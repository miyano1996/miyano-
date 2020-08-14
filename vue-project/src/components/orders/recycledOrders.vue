<template>
  <div id="deledOrders">
    <el-table
      :data="deledOrders.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())
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
          <el-button @click="recoverit(scope.row._id)" type="success" size="small">还原</el-button>
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
        :total="lastpage"
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
  created() {
    this.getOrders();
  },
  methods: {
    ...mapActions(["getAllOrders", "delOrder", "getDelOrders"]),
    ...mapMutations(["changedatanum", "changepagenum"]),
    async getOrders() {
      await this.getAllOrders(this.shopsId);
      await this.getDelOrders(this.shopsId);
    },
    async recoverit(id) {
      let { msg } = await this.delOrder({ id, success: false });
      if (msg.success) {
        this.$message({
          message: "恢复成功",
          type: "success",
        });
        this.getOrders();
      } else {
        alert("恢复失败");
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
    ...mapState(["deledOrders", "page", "allnum", "lastpage"]),
    ...mapStates(["shopsId"]),
  },
};
</script>

<style scoped>
#deledOrders {
  width: 100%;
  min-width: 600px;
  height: 100%;
  overflow: auto;
  background-color: #efefef;
}
#deledOrders .el-table {
  height: 95%;
  margin: 20px auto;
}
#deledOrders .block {
  display: flex;
  justify-content: center;
}
</style>