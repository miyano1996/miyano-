<template>
  <div style="height:560px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/system' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>店铺管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="pageData.row.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())
      || data.date.toLowerCase().includes(search.toLowerCase())
      || data.boss.toLowerCase().includes(search.toLowerCase())
      || data.credit.toLowerCase().includes(search.toLowerCase())
      )"
     style="width:80vw;margin-top:20px;">
      <el-table-column label="店铺开启日期" prop="date"></el-table-column>
      <el-table-column label="店铺名称" prop="name"></el-table-column>
      <el-table-column label="店铺所有者" prop="boss"></el-table-column>
      <el-table-column label="店铺ID" prop="_id"></el-table-column>
      <el-table-column label="店铺评级" prop="credit"></el-table-column>
      <el-table-column label="封禁/解除封禁">
        <template slot-scope="scope">
          <el-button v-if="scope.row.isLift" @click="isLift(scope.row)" type="danger">解禁</el-button>
          <el-button v-else @click="isLift(scope.row)" type="success">封禁</el-button>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope>
          <input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
            style="border:solid 0.5px #ccc;outline: none; width:100px"
          >
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改评级</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            style="margin-top:10px"
          >强制下架</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="修改店铺评分" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="店铺名称：" :label-width="formLabelWidth">
          <el-button type="text">{{shopName}}</el-button>
        </el-form-item>
        <el-form-item label="店铺评分：" :label-width="formLabelWidth">
          <div class="block">
            <span class="demonstration">初始分数为1分</span>
            <el-rate v-model="value1" show-text></el-rate>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <div class="block" style="margin-top:10px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageData.currentPage-0"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageData.pageSize-0"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageData.total-0"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions,mapMutations } = createNamespacedHelpers("shopManager");
export default {
  data() {
    return {
      search: "",
      value: true,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "100px",
      value1: 3,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      shopName: "",
      currentId: "",
    };
  },
  created() {
    this.getShopsSync({status: "1"});
  },
  watch: {
    value1(newValue) {
      this.changeCreditSync({ _id: this.currentId, credit: newValue });
      this.getShopsSync({status: "1"});
    },
  },
  computed: {
    ...mapState(["pageData"]),
  },
  methods: {
    ...mapActions([
      "getShopsSync",
      "changeCreditSync",
      "changeStateSync",
      "changeLiftSync",
    ]),
    ...mapMutations(["changePageSize","changeCurrentPage"]),
    handleEdit(index, row) {
      this.shopName = row.name;
      this.value1 = row.credit - 0;
      this.currentId = row._id;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.changeStateSync({ _id: row._id, status: "2" });
      this.open("警告", "已强制下架该店铺", "warning");
      this.getShopsSync({status: "1"});
    },
    isLift(row) {
      document.body.style.overflow = "hidden";
      this.changeLiftSync({ _id: row._id, isLift: !row.isLift });
      this.getShopsSync({status: "1"});
      if (row.isLift) {
        this.open("成功", "已解除店铺封禁", "success");
      } else {
        this.open("警告", "已封禁该店铺", "warning");
      }
    },
    open(title, message, type) {
      this.$notify({
        title,
        message,
        type,
      });
      // document.body.style.overflow = "scroll";
    },
    handleSizeChange(val) {
      this.changePageSize(val)
      this.getShopsSync({status: "1"});
    },
    handleCurrentChange(val) {
      this.changeCurrentPage(val)
      this.getShopsSync({status: "1"});
    },
  },
};
</script>

<style scoped>
</style>