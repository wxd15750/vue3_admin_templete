<template>
  <div class="showDatacontainer">
    <div class="title">
      <p>年度游客量对比</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <!-- 图形图标容器 -->
    <div class="charts" ref="showcharts"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ShowData',
})
</script>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
let showcharts = ref()

onMounted(() => {
  let mycharts = echarts.init(showcharts.value)
  mycharts.setOption({
    title: {
      text: '散点图',
      textStyle: {
        color: '#fff',
      },
      left: '40%',
    },
    // x轴和y轴
    xAxis: {
      type: 'category', // 均匀分布
      show: true,
    },
    yAxis: {
      show: false,
    },
    // 布局
    grid: {
      left: 20,
      top: 20,
      right: 0,
      bottom: 20,
    },
    // 系列
    series: [
      {
        type: 'scatter',
        data: [10, 20, 50, 30, 60, 70, 40],
        // 标记的图形设置
        symbol: 'arrow',
        symbolSize: 20,
        // 图文标签
        label: {
          show: true,
          position: 'top',
          color: '#fff',
        },
        // 散点图标记的颜色
        itemStyle: {
          color: 'purple',
        },
      },
    ],
  })
})
</script>

<style lang="scss" scoped>
.showDatacontainer {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  .title {
    p {
      color: #fff;
      font-size: 16px;
    }
  }
  .charts {
    height: calc(100% - 30px);
  }
}
</style>
