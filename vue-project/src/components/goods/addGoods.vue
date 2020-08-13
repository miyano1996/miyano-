<template>
  <div id="addGoods">
    <el-form label-width="100px" alin="left" label-position="left">
      <el-form-item label="商品名称:">
        <el-input clearable v-model="good.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格:">
        <el-input clearable v-model="good.price" oninput="value=value.replace(/[^\d]/g,'')"></el-input>
      </el-form-item>
      <el-form-item label="商品简介:">
        <el-input clearable v-model="good.detail" type="textarea" maxlength="200" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="上传商品图片:">
        <el-upload
          action="http://localhost:3000/images/upload"
          list-type="picture-card"
          :on-success="loadsuccess"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品库存:">
        <el-input clearable v-model="good.store" oninput="value=value.replace(/[^\d]/g,'')"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="sureadd" type="primary">确认添加</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("goods");

export default {
  data() {
    return {
      good: {
        name: "",
        image: "",
        store: "",
        detail: "",
        price: "",
        status: true,
      },
    };
  },
  created() {},
  methods: {
    ...mapActions(["addGood"]),
    async sureadd() {
      let msg = await this.addGood(this.good);
      if (msg.data.success) {
        alert("添加成功");
      }
    },
    loadsuccess(res) {
      if (res.success) {
        this.good.image = res.filename[0];
      }
    },
  },
};
</script>

<style scoped>
#addGoods {
  width: 600px;
  margin: 0 auto;
  padding: 30px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#addGoods .el-form {
  width: 100%;
}
</style>