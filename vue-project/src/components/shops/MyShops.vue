<template>
  <div class="box" style="box-shadow:0px 0px 10px gray;padding:20px;border-radius:0px;margin:15px">
    <el-breadcrumb
      separator="/"
      style="background-color:#f2f2f2;border-radius:10px;padding:18px 10px;margin-bottom:20px;"
    >
      <el-breadcrumb-item :to="{ path: '/' }">我的店铺</el-breadcrumb-item>
      <el-breadcrumb-item>店铺列表</el-breadcrumb-item>
    </el-breadcrumb>
    <users-view-charts :chartsData="datas"></users-view-charts>

    <h1>正在营业</h1>
    <div class="hr"></div>
    <article>
      <el-table :data="tableData" style="height: 100%">
        <el-table-column label="店名" width="150">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="信用评级" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.credit }}</span>
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
        <el-table-column label="商品种类" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="封禁状态" width="100">
          <template slot-scope="scope">
            
            <span v-if="scope.row.isLift" style="margin-left: 10px;color:red">封禁中</span>
            <span v-else style="margin-left: 10px;color:green">正常</span>
          </template>
        </el-table-column>
        <el-table-column label="进入店铺" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="gogogo(scope.row._id)">进入店铺</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="give(scope.row)">修改信息</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">关闭店铺</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="add" @click="toAdd">点击申请新店铺</div>
    </article>
    <h1>等待审批</h1>

    <div class="hr"></div>
    <article>
      <el-table :data="waitData" style="height: 100%">
        <el-table-column label="店名" width="150">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="信用评级" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.credit }}</span>
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
        <el-table-column label="商品种类" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺编号" width="250">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row._id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="give(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">撤回申请</el-button>
          </template>
        </el-table-column>
      </el-table>
    </article>
    <h1>审批失败</h1>

    <div class="hr"></div>
    <article>
      <el-table :data="refuseData" style="height: 100%">
        <el-table-column label="店名" width="150">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="信用评级" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.credit }}</span>
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
        <el-table-column label="商品种类" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺编号" width="250">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row._id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="to2(scope.row)">确定</el-button>
          </template>
        </el-table-column>
      </el-table>
    </article>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UsersViewCharts from "../charts/UsersView/UsersViewCharts";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  components: {
    UsersViewCharts,
  },
  async created() {
    this.datas = (await this.getOwnShopsSync(this.managerId)).data;
    // console.log(await this.getOwnShopsSync(this.managerId));
    const num = this.datas.filter((value) => {
      return value.status == 4;
    });
    // console.log(this.datas);
    if (num.length > 0) {
      this.$notify({
        title: "审批",
        message: "您有申请被驳回，请到页面底部确认信息",
        type: "warning",
        duration:0
      });
    }
    const suc = this.datas.filter((value) => {
      return value.status == 5;
    });
    if (suc.length > 0) {
      this.$notify({
        title: "审批",
        message: "您有"+suc.length+"个申请已通过审批，请注意查看您的新店铺",
        offset: 100,
        duration:0,
        type: "success",
      });
    };
    suc.forEach(value=>{value.status='1';this.updateShopsSync(value)});

    
  },
  methods: {
    ...mapActions(["getOwnShopsSync", "delShopsSync", "updateShopsSync"]),
    ...mapMutations(["addOneShop", "changeShopsId"]),
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
    gogogo(shopsId) {
      this.changeShopsId(shopsId);
      this.$router.push("/main/goodsList");
    },
    toAdd() {
      this.$router.push("/addShops");
    },
    to2(content) {
      content.status = "2";
      // console.log(content);
      this.updateShopsSync(content);
    },
  },
  computed: {
    //用户名
    managerId() {
      // return "5f335ec79a560000630005c3";
      return localStorage.managerId;
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
    refuseData() {
      return this.datas.filter((value) => {
        return value.status == 4;
      });
    },
  },
  data() {
    return {
      // tableData: [],
      datas: [],
      agree: "",
      refuse: "",
    };
  },
};
</script>

<style scoped>
.box {
  width: 95%;
  box-sizing: border-box;
}
h1 {
  color: gray;
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
  border: 2px dashed #909399;
  padding: 10px;
  cursor: pointer;
  /* background-color: pink; */
  font-size: 22px;
}
</style>