<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/system' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>店铺管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="shopsInfo.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="店铺开启日期" prop="date"></el-table-column>
      <el-table-column label="店铺名称" prop="name"></el-table-column>
      <el-table-column label="店铺所有者" prop="boss"></el-table-column>
      <el-table-column label="店铺ID" prop="_id"></el-table-column>
      <el-table-column label="店铺评级" prop="credit"></el-table-column>
      <el-table-column label="封禁/解除封禁" prop="name">
        <!-- <el-switch  prop="status" active-color="#13ce66" inactive-color="#ff4949" @change="handelChange(value)"></el-switch> -->
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
import { createNamespacedHelpers } from 'vuex';
const {mapState,mapActions} = createNamespacedHelpers('shopManager');
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
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] 
    };
  },
  created(){
    this.getShopsSync({status:'1'});
  },
  computed:{
    ...mapState(['shopsInfo'])
  },
  methods: {
    ...mapActions(['getShopsSync']),
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handelChange(value){
      console.log('改变',value);
    },
  },
};
</script>

<style>
</style>