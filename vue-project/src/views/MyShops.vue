<template>
  <div>
    <h1>我的店铺</h1>
    <div class="hr"></div>
    <article>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="店名" width="380">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="信用评级" width="280">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.credit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺编号" width="280">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row._id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="give(scope.row._id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="add">申请开店</div>
    </article>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  async created() {
    this.tableData = await this.getOwnShopsSync(this.managerId);
    console.log(this.tableData);
  },
  methods: {
    ...mapActions(["getOwnShopsSync"]),
    give() {},
  },
  computed: {
    managerId() {
      return "1";
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
};
</script>

<style scoped>
h1 {
  color: green;
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
}
</style>