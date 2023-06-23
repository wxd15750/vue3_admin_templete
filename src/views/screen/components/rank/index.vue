<template>
  <div class="rank">
    <div class="title">
      <p>热门景区排行</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <!-- 图形图标容器 -->
    <div class="charts" ref="charts"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Rank',
})
</script>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

// 获取DOM节点
let charts = ref()

onMounted(() => {
  let mycharts = echarts.init(charts.value)

  mycharts.setOption({
    // 标题组件
    title: {
      // 主标题
      text: '景区排行',
      link: 'http://www.baidu.com',
      // 标题的位置
      left: '50%',
      // 标题的样式
      textStyle: {
        color: '#fff',
        fontSize: 20,
      },
      // 子标题
      subtext: '各大景区排行',
      // 子标题样式
      subtextStyle: {
        color: 'yellowgreen',
        fontSize: 16,
      },
    },
    // x轴和y轴
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    // 布局组件
    grid: {
      left: 20,
      right: 20,
      bottom: 20,
    },
    // 系列：决定要展示图形是哪一种的
    series: [
      {
        type: 'bar',
        data: [10, 50, 20, 60, 80, 40, 10, 25],
        // 柱状图：图形上文本标签
        label: {
          show: true,
          // 文字的位置
          position: 'insideTop',
          // 文字颜色
          color: 'yellowgreen',
        },
        // 是否显示背景颜色
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(255,255,255,.2)',
        },

        // 柱条的样式
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          // 柱条的颜色
          color: function (data: any) {
            // 给每一个柱条一个背景颜色
            let arr = [
              '#fb54dd',
              'red',
              'yellowgreen',
              'purple',
              'skyblue',
              'pink',
              'yellowgreen',
              '#f4b4b3',
            ]
            return arr[data.dataIndex]
          },
        },
      },
      {
        type: 'line',
        data: [30, 50, 40, 10, 30, 15, 20, 60],
        smooth: true,
      },
    ],
    tooltip: {
      backgroundColor: 'rgba(255,255,255,.8)',
      borderColor: 'rgba(255,255,255,.6)',
    },
  })
})
</script>

<style lang="scss" scoped>
.rank {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0px;
  .title {
    margin-left: 5px;
    p {
      color: #fff;
      font-size: 18px;
    }
  }
  .charts {
    height: calc(100% - 30px);
  }
}
</style>
