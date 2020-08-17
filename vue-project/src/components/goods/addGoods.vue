<template>
  <div id="addGoods">
    <div class="addbox">
      <el-form
        label-width="100px"
        alin="left"
        label-position="left"
        :rules="rules"
        :model="good"
        ref="good"
      >
        <el-form-item label="上传商品图片:">
          <el-upload
            action="http://localhost:3000/images/upload"
            list-type="picture"
            :on-success="loadsuccess"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品种类:" prop="type">
          <el-select
            v-model="good.type"
            clearable
            filterable
            allow-create
            default-first-option
            placeholder="请输入商品种类"
          >
            <el-option v-for="item in type" :key="item.index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品名称:" prop="name">
          <el-input clearable v-model="good.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格:" prop="price">
          <el-input clearable v-model="good.price"></el-input>
        </el-form-item>
        <el-form-item label="商品简介:">
          <el-input
            clearable
            v-model="good.detail"
            type="textarea"
            maxlength="200"
            :autosize="{ minRows: 5, maxRows: 10}"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="上传详情图片:">
          <el-upload
            action="http://localhost:3000/images/upload"
            list-type="picture"
            :on-success="loaddetailimg"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品库存:" prop="store">
          <el-input clearable v-model="good.store"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="sureadd('good')" type="primary">确认添加</el-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("goods");
const { mapState } = createNamespacedHelpers("shops");

export default {
  data() {
    return {
      good: {
        type: "",
        name: "",
        image: "",
        detailimg: [],
        store: "",
        detail: "",
        price: "",
        status: true,
        shopId: "",
      },
      type: ["电子产品", "食品酒水", "服装饰品"],
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        type: [
          {
            required: true,
            message: "请至少选择一个商品种类",
            trigger: "blur",
          },
        ],
        store: [{ required: true, message: "请输入库存", trigger: "blur" }],
      },
      formisable: false,
    };
  },
  created() {
    this.getAllGoods();
  },
  methods: {
    ...mapActions(["addGood", "getAllGoods"]),
    async sureadd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.formisable = true;
        }
      });
      if (this.formisable) {
        this.good.shopId = this.shopsId;
        let msg = await this.addGood(this.good);
        if (msg.data.success) {
          alert("添加成功");
        }
      }
    },
    loadsuccess(res) {
      if (res.success) {
        this.good.image = res.filename[0];
      }
    },
    loaddetailimg(res) {
      if (res.success) {
        this.good.detailimg.push(res.filename[0]);
      }
    },
  },
  computed: {
    ...mapState(["shopsId"]),
  },
};
</script>

<style scoped>
#addGoods {
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
}
#addGoods .addbox {
  width: 520px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12px;
}
#addGoods .el-form {
  width: 500px;
}
</style>