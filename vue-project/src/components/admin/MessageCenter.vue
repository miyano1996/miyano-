<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/system' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>消息中心</el-breadcrumb-item>
    </el-breadcrumb>
    <el-badge :value="pageData.total" class="item">
      <el-button size="small" active-text-color="#ffd04b">店铺申请</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="small">新增用户</el-button>
    </el-badge>
    <el-badge :value="1" class="item" type="primary">
      <el-button size="small">留言</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          留言
          <el-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <el-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>店铺申请信息</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="text item">
        <el-table :data="pageData.row" style="width: 70vw; overflow: hidden;" height="500">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="申请店铺名称：">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID：">
                  <span>{{ props.row._id }}</span>
                </el-form-item>
                <el-form-item label="经营类目：">
                  <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="店铺申请者 ID：">
                  <span>{{ props.row.managerId }}</span>
                </el-form-item>
                <el-form-item label="申请描述：">
                  <span>{{ props.row.des }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="申请日期" prop="date"></el-table-column>
          <el-table-column label="店铺名称" prop="name"></el-table-column>
          <el-table-column label="申请人" prop="boss"></el-table-column>
          <el-table-column label="操作" prop="desc">
            <template slot-scope="scope">
              <el-button type="success" @click="open(scope.$index, scope.row,'yes')">同意</el-button>
              <el-button type="warning" @click="open(scope.$index, scope.row,'no')">驳回</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

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
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "shopManager"
);
export default {
  data() {
    return {};
  },
  created() {
    this.getShopsSync({ status: "3" });
  },
  computed: {
    ...mapState(["pageData"]),
  },
  methods: {
    ...mapActions(["getShopsSync", "changeStateSync"]),
    ...mapMutations(["changePageSize", "changeCurrentPage"]),
    open(index, row, th) {
      console.log(index, row, th);
      if (th == "yes") {
        document.body.style.overflow = "scroll";
        this.$confirm(
          `此操作将同意“${row.boss}：${row.name}”的店铺开通申请, 是否继续?`,
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            center: true,
          }
        )
          .then(() => {
            this.getShopsSync({status:'3'})
            this.changeStateSync({_id:row._id,status:'5'})
            this.$message({
              type: "success",
              message: "已同意!",
            });
            this.getShopsSync({status:'3'})
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      } else {
        this.$confirm(
          `此操作将驳回“${row.boss}：${row.name}”的店铺开通申请, 是否继续?`,
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            center: true,
          }
        )
          .then(() => {
            this.changeStateSync({ _id: row._id, status: "5" });
            this.$message({
              type: "warning",
              message: "已驳回!",
            });
            this.getShopsSync({ status: "3" });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      }
    },
    handleSizeChange(val) {
      this.changePageSize(val);
      this.getShopsSync({ status: "3" });
    },
    handleCurrentChange(val) {
      this.changeCurrentPage(val);
      this.getShopsSync({ status: "3" });
    },
  },
};
</script>

<style scoped>
.item {
  margin-top: 30px;
  margin-right: 40px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>