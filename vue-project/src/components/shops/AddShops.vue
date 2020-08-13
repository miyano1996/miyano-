<template>
  <div class="box" style="box-shadow:0px 0px 15px #f2f2f2;padding:20px;margin:15px;border-radius:0px">
    <el-breadcrumb
      separator="/"
      style="background-color:#f2f2f2;border-radius:10px;padding-left:10px;margin-bottom:20px;"
    >
      <el-breadcrumb-item :to="{ path: '/' }">我的店铺</el-breadcrumb-item>
      <el-breadcrumb-item>申请店铺</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>申请店铺</h1>
    <div class="hr"></div>
    <div class="demo-input-suffix">
      <span>店铺名称：</span>
      <el-input placeholder="请输入店铺名" v-model="content.name" class="inp ma"></el-input>
      <span>申请人：</span>
      <el-input placeholder="请输入申请人姓名" v-model="content.boss" class="inp ma"></el-input>
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
    <el-button type="primary" @click="addBtn" id="btn" plain>提交申请</el-button>
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
      content: {
        date: "",
        name: "",
        boss: localStorage.managerName,
        des: "",
        type: "",
        status: "3",
        managerId: localStorage.managerId,
        credit: "1",
      },
      managerName: "",
    };
  },
  computed:{
    // content(){
    //   return this.content.managerId = '123'
    // }
  },
  created(){
    // console.log(this.content);
  },
  methods: {
    ...mapActions(["addShopsSync"]),
    async addBtn() {
      this.managerName = localStorage.managerName;
      // this.managerId = '1';
      this.content.date = new Date().toLocaleDateString();
      const data = await this.addShopsSync({ ...this.content });
      // console.log(data);
      this.$notify({
        title: "成功",
        message: "已成功发送申请信息",
        type: "success",
      });
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