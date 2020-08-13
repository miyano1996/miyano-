<template>
<main>
  <div class="register">
    <h3>用户注册</h3>
    <el-form
      :model="users"
      status-icon
      :rules="rules"
      ref="ISverify"
      class="demo-ruleForm"
    >
      <!-- 账号 -->
      <el-form-item prop="account">
        <el-input v-model="users.account" @blur="again" size="medium" placeholder="用户名"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input type="password" v-model="users.password" autocomplete="off" show-password size="medium" placeholder="密码"></el-input>
      </el-form-item>
      <!-- 确认密码 -->
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="users.checkPass" autocomplete="off" show-password size="medium" placeholder="确认密码"></el-input>
      </el-form-item>
     <!-- 姓名 -->
      <el-form-item prop="name">
        <el-input v-model="users.name" size="medium" placeholder="真实姓名"></el-input>
      </el-form-item>
      <!-- 年龄 -->
        <el-form-item prop="age">
          <el-input v-model.number="users.age"  size="medium" placeholder="年龄"></el-input>
        </el-form-item>
        <!-- 性别 -->
       <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="users.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
      <!-- 提交 -->
      <el-form-item>
        <el-button  type="primary" @click="submitForm('ISverify')" :disabled="canRegister">提交</el-button>
        <el-button @click="resetForm('ISverify')" type="warning">重置</el-button>
      </el-form-item>
        <router-link to="/login" tag='p' class="span1"><i class="el-icon-s-custom"></i>已有账号去登录>></router-link>
        <router-link to="/registerMg" tag='p' class="span2"><i class="el-icon-s-shop"></i>商家注册通道>></router-link>
    </el-form>
  </div>
 </main>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {//密码验证规则
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.users.checkPass !== "") {
          this.$refs.ISverify.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {//二次密码验证规则
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.users.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkAge = (rule, value, callback) => {//年龄验证
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
    return {
      canRegister:false,
      users: {
        account:"",
        password: "",
        checkPass: "",
        name: "",
        age:"",
        gender:"男"
      },
      rules: {
        account: [
          //required: true,为true时开启验证
          { required: true, message: "请输入注册账号", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" },
        ],
        name: [//实名认证
          { required: true, message: "需要实名认证，请输入真实姓名。", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" },
        ],
        gender: [
            { required: true, message: '请完善性别', trigger: 'change' }
          ],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
         age: [{ validator: checkAge, trigger: 'blur' }],
      },
    };
  },
  methods: {
    async register() {
      const data = await this.$api.users.register({...this.users}); //将要注册的数据发送到后端1
      console.log(data);
      if (data.success) {
        // alert("注册成功");
        this.open1();
        this.$router.push("/login");
      }
    },
    async again() {// 验证重名
      // const data = await this.$api.users.isLogin(this.users.account); //将要注册的数据发送到后端1
      const data=await this.$api.users.againName(this.users.account);
      console.log(data);
      if (data.success) {
        alert("此用户名已存在");
        this.canRegister=true;
        // return true
      }else{
        this.canRegister=false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {//资料填写无误
          this.register();
          console.log(this.users)
        } else {
          console.log("error submit!!");
          this.open2();
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open1() {
      //资料通过验证  已添加学生  弹窗
      this.$notify({
        title: "成功",
        message: "注册成功",
        type: "success",
      });
    },
    open2() {
      this.$notify({
        //内容未填写完整
        title: "警告",
        message: "注册失败，正确提交",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
main{
  width: 100%;
  height: 100%;
  position: relative;
}
h3{
  text-align: center;
}
p{
  /* box-sizing: border-box; */
  color: #e6a23c;
  /* padding-right:30px ; */
  width:100%;
  cursor:pointer;
  text-align: right;
}
/* .span2{
  color: #e6a23c;

} */
.register{
  position: absolute;
  top:50%;
  left:50%;
  margin-top: -270px;
  margin-left: -210px;
}

.el-input {
  width: 300px;
}
.el-button {
  width: 140px;
}
.el-button + .el-button{
  margin-left: 20px;
}
.el-form-item__label{
  color: rgb(245, 245, 245);
}
</style>