<template>
  <el-carousel height="500px" :interval="3000" arrow="always" loop>
    <el-carousel-item v-for="(item,index) in image" :key="index">
      <div>
        <img :src="item.url" alt />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      image: [
        {
          url:
            "https://resource.smartisan.com/resource/169a540ea8976902be9846901df7d1e5.jpg?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95",
        },
        {
          url:
            "https://resource.smartisan.com/resource/b5b71cda697d55fd733aaff55df023b0.jpg?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95",
        },
        {
          url:
            "https://resource.smartisan.com/resource/ae57649f0e7eab936ee04688ec482f60.jpg?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95",
        },
        {
          url:
            "https://resource.smartisan.com/resource/ca6bfe9c0da84bc9ae51b52a34ca7a8c.jpeg?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95",
        },
        {
          url:
            "https://resource.smartisan.com/resource/ce34ba6acdc176be3141733d99b68964.jpg?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95",
        },
      ],
    };
  },
};
</script>

<style>
</style>