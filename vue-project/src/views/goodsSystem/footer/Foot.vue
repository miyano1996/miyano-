<template>
  <div class='footer'>
    <h5>
      <span> <i class="el-icon-s-flag"></i>关于我们</span>
      <span> <i class="el-icon-monitor"></i>广告服务</span>
      <span> <i class="el-icon-phone"></i> 400-660-0108</span>
      <span> <i class="el-icon-s-custom"></i>客服论坛</span>
    </h5> 
    <h6>
      <span>公安备案号 11010502030143</span>
      <span>蜀ICP备19004658号</span>
      <span>版权与免责声明 </span>
      <span>©1999-2020 成都老千网络技术有限公司</span>
    </h6> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 98px;
    background-color:whitesmoke;
    color: #1e1e1e;
}
.footer h5,h6{
  padding: 0px;
  margin: 0px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.footer h5{
  font-weight: 400;
}
.footer h6{
  margin-top: -20px;
}
.footer h5 span{
  margin-right: 10px;
}
.footer h6 span{
  margin-right: 20px;
}
</style>