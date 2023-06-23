<template>
  <div class="lineContainer">
    <div class="title">
      <p>未来七天游客量趋势图</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="line"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Line',
})
</script>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

let line = ref()

onMounted(() => {
  const myline = echarts.init(line.value)
  // 设置配置项
  myline.setOption({
    title: {
      // text: '游客访问量趋势图',
    },
    xAxis: {
      type: 'category',
      // 两侧不留白
      boundaryGap: false,
      // 分割线
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // 轴线的刻度
      axisTick: {
        show: true,
      },
    },
    yAxis: {
      // 分割线
      splitLine: {
        show: false,
      },
      // 轴线设置
      axisLine: {
        show: true,
      },
      // 轴线的刻度
      axisTick: {
        show: true,
      },
    },
    // 调整布局
    grid: {
      left: 40,
      right: 0,
      top: 0,
      bottom: 20,
    },
    // 系列
    series: [
      {
        type: 'line',
        data: [120, 1600, 399, 852, 530, 620, 1450],
        // 平滑曲线
        smooth: true,
        // 区域填充样式
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(43,254,192, 0.9)',
            },
            {
              offset: 0.4,
              color: 'rgba(43,254,192, 0.5)',
            },
            {
              offset: 1,
              color: 'rgba(43,254,192, 0)',
            },
          ]),
        },
      },
    ],
  })
})
</script>

<style lang="scss" scoped>
.lineContainer {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 10px;
  .title {
    margin-left: 10px;
    p {
      color: #fff;
      font-size: 20px;
    }
  }
  .charts {
    height: calc(100% - 40px);
  }
}
</style>
