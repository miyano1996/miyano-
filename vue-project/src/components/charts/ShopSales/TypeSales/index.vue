<template>
  <div id="type-sales-chart"></div>
</template>

<script>
export default {
  mounted() {
    const chartDom = document.getElementById("type-sales-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      backgroundColor: "#2c343c",
      title: {
        text: "分类销售",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc",
        },
      },

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: "类别销售额",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "男士上衣" },
            { value: 310, name: "女士上衣" },
            { value: 274, name: "女士下装" },
            { value: 235, name: "家居服" },
            { value: 400, name: "婴儿服饰" },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          itemStyle: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200;
          },
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
#type-sales-chart {
    display: block;
  width: 480px;
  height: 400px;
}
</style>