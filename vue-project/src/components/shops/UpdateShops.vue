<template>
  <div class="box" style="box-shadow:0px 0px 10px gray;padding:20px;border-radius:0px;margin:15px">
    <el-breadcrumb
      separator="/"
      style="background-color:#f2f2f2;border-radius:10px;padding-left:10px;margin-bottom:20px;"
    >
      <el-breadcrumb-item :to="{ path: '/' }">我的店铺</el-breadcrumb-item>
      <el-breadcrumb-item>修改店铺信息</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>修改店铺</h1>
    <div class="hr"></div>
    <div class="demo-input-suffix">
      <span>店铺名称：</span>
      <el-input placeholder="请输入店铺名" v-model="content.name" class="inp ma"></el-input>
      <span>店铺描述：</span>
      <el-input placeholder="请输入店铺描述" v-model="content.des" class="inp ma"></el-input>
      <span>产品类别：</span>
      <el-select placeholder="请选择" class="ma" v-model="content.type">
        <el-option label="食品" value="食品"></el-option>
        <el-option label="电器" value="电器"></el-option>
        <el-option label="宠物" value="宠物"></el-option>
        <el-option label="其他" value="其他"></el-option>
      </el-select>
    </div>
    <el-button type="primary" @click="updateBtn" id="btn" plain>确认修改</el-button>
    <!-- <el-radio v-model="showStudents.sex" label="男" class="ma" value="男"></el-radio>
    <el-radio v-model="showStudents.sex" label="女" class="ma" value="女"></el-radio>-->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  data() {
    return {
      //   content: {
      //     name: "1",
      //     des: "1",
      //     type:'食品'
      //   },
    };
  },
  methods: {
    ...mapActions(["updateShopsSync"]),
    ...mapMutations(["backOne"]),
    updateBtn() {
      this.updateShopsSync(this.content);
      this.backOne();
      this.$router.push("/myShops");
      this.$notify({
        title: "成功",
        message: "修改成功",
        type: "success",
      });
    },
  },
  computed: {
    ...mapState(["oneShop"]),
    content() {
      return this.oneShop;
    },
  },
};
</script>

<style scoped>
h1 {
  color: green;
  font-size: 26px;
}
.hr {
  width: 100%;
  height: 3px;
  background-color: gainsboro;
}
.demo-input-suffix {
  margin-top: 20px;
}
span {
  line-height: 50px;
}
</style>