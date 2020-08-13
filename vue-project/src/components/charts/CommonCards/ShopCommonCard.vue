<template>
  <div class="common-card" >
    <el-card shadow="hover">
      <div class="title">{{title}}</div>
      <div class="value">{{value}}</div>
      <div class="chart">
          <slot></slot>
      </div>
      <div class="line"></div>
      <div class="total">
          <slot name="footer"></slot>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
    props:{
        title:String,
        value:String
    }
}
</script>

<style lang="scss" scoped>

    .title{
        font-size: 12px;
        color:#888;
    }
    .value{
        font-size:25px;
        color: #000;
        margin-top:5px;
        letter-spacing:1px
    }
    .chart{
        height: 50px;
    }
    .line{
        margin:10px 0;
        border-top:1px solid #eee ;
    }
    .total{
        font-size: 12px;
        color:#888
    }
</style>