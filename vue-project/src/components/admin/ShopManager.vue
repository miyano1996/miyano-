<template>
  <div >
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/system' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>店铺管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="shopsInfo.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;margin-top:20px;"
    >
      <el-table-column label="店铺开启日期" prop="date"></el-table-column>
      <el-table-column label="店铺名称" prop="name"></el-table-column>
      <el-table-column label="店铺所有者" prop="boss"></el-table-column>
      <el-table-column label="店铺ID" prop="_id"></el-table-column>
      <el-table-column label="店铺评级" prop="credit"></el-table-column>
      <el-table-column label="封禁/解除封禁">
        <template slot-scope="scope">
          <el-button v-if="scope.row.isLift" @click="isLift(scope.row)" type="danger">封禁</el-button>
          <el-button v-else @click="isLift(scope.row)" type="success">解禁</el-button>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改评级</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">强制下架</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="修改店铺评分" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1" show-text></el-rate>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("shopManager");
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
      formLabelWidth: "120px",
      value1: 3,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  created() {
    this.getShopsSync({ status: "1" });
  },
  computed: {
    ...mapState(["shopsInfo"]),
  },
  methods: {
    ...mapActions(["getShopsSync"]),
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handelChange(value) {
      console.log("改变", value);
    },
    isLift(row) {
      console.log(document.body);
      document.body.style.overflow = 'hidden'
      console.log(row);
      row.isLift = !row.isLift;
      if(row.isLift){
        this.open1()
      }else{
        this.open2()
      }
    },
    open1() {
      this.$notify({
        title: "成功",
        message: "已解除店铺封禁",
        type: "success",
      });
    },
    open2() {
      this.$notify({
        title: "警告",
        message: "已封禁该店铺",
        type: "warning",
      });
    },
  },
};
</script>

<style>
</style>