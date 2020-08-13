<template>
  <div class="mian">
    <div class="top">
      <div class="nav">
        <strong>店铺名称</strong>
        <span class="edit" @click="isShowedit">编辑商品</span>
      </div>
      <div class="left">
        <img src="../../assets/商品图片.jpg" alt />
      </div>
      <div class="right">
        <h2>陶瓷：晴天娃娃</h2>
        <span class="price">价格: 25元</span>
        <span class="stock">库存: 1500件</span>
        <p>商品描述:</p>
        <span class="text">陶瓷晴天娃娃,好看实惠</span>
      </div>
    </div>
    <div class="bottom" v-if="flag">
      <i class="close" @click="isShowedit"></i>
      <div class="updatetext">
        <span>商品类别：</span>
        <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择商品标签"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div>
          <span>商品名字：</span>
          <el-input placeholder="新的商品名字" v-model="input" clearable></el-input>
        </div>
        <div>
          <span>商品价格：</span>
          <el-input placeholder="新的商品价格" v-model="input" clearable></el-input>
        </div>
        <span>商品库存：</span>
        <el-input-number v-model="num" :min="1" :max="100000" label="描述文字"></el-input-number>
        <div class="textarea">
          <span>商品描述：</span>
          <el-input
            type="textarea"
            placeholder="请输入商品描述"
            v-model="textarea"
            maxlength="100"
            show-word-limit
            :autosize="{minRows:4}"
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      options: [
        {
          value: "酒水饮品",
          label: "酒水饮品",
        },
        {
          value: "生鲜",
          label: "生鲜",
        },
        {
          value: "电器数码",
          label: "电器数码",
        },
        {
          value: "零食",
          label: "零食",
        },
        {
          value: "家电",
          label: "家电",
        },
        {
          value: "服装服饰",
          label: "服装服饰",
        },
      ],
      value: [],
      input: "",
      num: 1,
      text: "",
      textarea: "",
    };
  },
  methods: {
    isShowedit() {
      this.flag = !this.flag;
    },
  },
};
</script>

<style scoped>
.textarea {
  width: 500px;
}
.textarea span {
  display: inline-block;
  margin: 20px 0;
}
.updatetext {
  margin-left: 100px;
}
.el-input-number {
  margin: 20px 0;
}
.el-select,
.el-input {
  width: 300px;

  margin: 20px 0;
}
.mian {
  width: 90%;
  margin: 30px auto;
  padding: 0 30px;
  position: relative;
}
.mian .top {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid rgb(218, 218, 218);
  box-shadow: 0 0 5px rgb(204, 204, 204);
}
.mian .top .nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(218, 218, 218);
  padding: 0 10px;
  background: rgb(240, 240, 240);
}
.mian .top .left img {
  margin-top: 5px;
  margin-left: 5px;
  width: 300px;
}
.mian .top .left {
  margin-right: 30px;
}
.mian .top .right .price {
  color: rgb(243, 13, 59);
  display: block;
  margin: 15px 0;
  margin-top: 90px;
}
.mian .top .right .stock {
  display: block;
  margin: 15px 0;
  color: rgb(61, 61, 61);
}
.text {
  color: rgb(95, 95, 95);
  font-size: 15px;
}
.mian .bottom {
  width: 97%;
  height: 800px;
  position: absolute;
  background: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgb(158, 158, 158);
  top: 0px;
  border-radius: 5px;
}
.mian .bottom .close {
  display: inline-block;
  width: 25px;
  height: 25px;
  position: relative;
  background: url("../../assets/关闭.png") no-repeat center center;
  background-size: 25px;
  left: 98%;
  top: 5px;
}
</style>