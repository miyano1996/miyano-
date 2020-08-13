<template>
  <div class="common-card" :style="{width:'100%',height:'100%'}">
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
    .common-card{
        height: 100%;
    }
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
    .emphasis{
        color: #000;
        font-weight: 900;
    }
</style>