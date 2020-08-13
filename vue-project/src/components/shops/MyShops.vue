<template>
  <div class="box">
    <el-breadcrumb
      separator="/"
      style="background-color:#f2f2f2;border-radius:10px;padding:18px 10px;margin-bottom:20px;"
    >
      <el-breadcrumb-item :to="{ path: '/' }">我的店铺</el-breadcrumb-item>
      <el-breadcrumb-item>店铺列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>正在营业</h1>
    <div class="hr"></div>
    <article>
      <el-table :data="tableData" style="height: 100%">
        <el-table-column label="店名" width="130">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="信用评级" width="130">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.credit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺编号" width="280">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row._id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="申请日期" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺描述" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.des }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品种类" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="give(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="add" @click="toAdd">申请开店</div>
    </article>
    <h1 style="color:greenyellow">等待审批</h1>

    <div class="hr"></div>
    <article>
      <el-table :data="waitData" style="height: 100%">
        <el-table-column label="店名" width="130">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="信用评级" width="130">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.credit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺编号" width="280">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row._id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="申请日期" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺描述" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.des }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品种类" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="give(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">撤回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </article>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  async created() {
    this.datas = (await this.getOwnShopsSync(this.managerId)).data;
  },
  methods: {
    ...mapActions(["getOwnShopsSync", "delShopsSync"]),
    ...mapMutations(["addOneShop"]),
    handleDelete(a) {
      this.delShopsSync(a);
      this.datas = this.datas.filter((value) => {
        return value._id != a;
      });
    },
    give(a) {
      this.addOneShop(a);
      this.$router.push("/updateShops");
    },
    toAdd() {
      this.$router.push("/addShops");
    },
  },
  computed: {
    //用户名
    managerId() {
      return "1";
      // return localStorage.managerId
    },
    tableData() {
      return this.datas.filter((value) => {
        return value.status == 1;
      });
      // return this.datas
    },
    waitData() {
      return this.datas.filter((value) => {
        return value.status == 3;
      });
    },
  },
  data() {
    return {
      // tableData: [],
      datas: [],
    };
  },
};
</script>

<style scoped>
.box {
  width: 100%;
}
h1 {
  color: green;
  font-size: 26px;
}
.hr {
  width: 100%;
  height: 3px;
  background-color: gainsboro;
}
.add {
  color: green;
  font-weight: bold;
  text-align: center;
  /* margin-top: 20px; */
  margin: 20px 5px;
  border: 1px dashed #909399;
  padding: 10px;
  cursor: pointer;
  /* background-color: pink; */
  font-size: 22px;
}
</style>