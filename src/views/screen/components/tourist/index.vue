<template>
  <div class="box">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">
        可预约总量
        <span>99999</span>
        人
      </p>
    </div>

    <div class="number">
      <span v-for="(item, index) in people" :key="index">{{ item }}</span>
    </div>

    <!-- 盒子将来echarts展示图像图标的节点 -->
    <div class="charts" ref="charts"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tourist',
})
</script>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// 引入echarts
import * as echarts from 'echarts'
// 水球图插件
import 'echarts-liquidfill'

let people = ref('216908人')
// 获取echarts节点
let charts = ref()
onMounted(() => {
  // 获取echarts类实例
  let mycharts = echarts.init(charts.value)
  // 设置实例的配置项
  mycharts.setOption({
    // 标题组件
    title: {
      // text: '水球图',
    },
    // x轴组件
    xAxis: {},
    // y轴组价
    yAxis: {},
    // 系列：决定展示什么样的图形图标
    series: {
      type: 'liquidFill',
      data: [0.8, 0.2, 0.5, 0.7, 0.3],
      radius: '90%',
      itemStyle: {
        opacity: 0.55,
      },
      outline: {
        show: true,
        borderDistance: 8,
        itemStyle: {
          color: 'none',
          borderColor: '#294D99',
          borderWidth: 8,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.25)',
        },
      },
    },
    // 布局组件
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  })
})
</script>

<style lang="scss" scoped>
.box {
  background: url(../../images/dataScreen-main-lt.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  .top {
    margin-left: 20px;
    .title {
      color: #fff;
      font-size: 20px;
    }
    .bg {
      width: 68px;
      height: 7px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    }
    .right {
      float: right;
      color: #fff;
      font-size: 20px;
      span {
        color: yellowgreen;
      }
    }
  }
  .number {
    margin-top: 30px;
    display: flex;
    padding: 10px;
    span {
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: url(../../images/total.png) no-repeat;
      background-size: 100% 100%;
      color: #29fcff;
    }
  }
  .charts {
    width: 100%;
    height: 250px;
  }
}
</style>
