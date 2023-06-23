<template>
  <div class="box1">
    <div class="title">
      <p>男女比例</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="sex">
      <div class="man">
        <img src="../../images/man.png" alt="" />
      </div>
      <div class="woman">
        <img src="../../images/woman.png" alt="" />
      </div>
    </div>

    <div class="rate">
      <p>男士58%</p>
      <p>女士42%</p>
    </div>

    <div class="charts" ref="charts"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Sex',
})
</script>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
let charts = ref()
// 获取图形图表的DOM节点
onMounted(() => {
  // 初始化echarts图表
  let myecharts = echarts.init(charts.value)
  myecharts.setOption({
    // 标题组件
    title: {
      // text: '男女比例',
      // textStyle: {
      //   color: 'skyblue',
      // },
      // left: '50%',
    },
    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      show: false,
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        data: [58],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: 'skyblue',
          borderRadius: 20,
        },
      },
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        // 调整女士进度条的位置
        barGap: '-100%',
        itemStyle: {
          color: 'pink',
          borderRadius: 20,
        },
      },
    ],
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  })
})
</script>

<style lang="scss" scoped>
.box1 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0;
  .title {
    margin-left: 20px;
    p {
      color: #fff;
      font-size: 20px;
    }
  }
  .sex {
    display: flex;
    justify-content: center;
    .man {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../../images/man-bg.png) no-repeat;
    }
    .woman {
      width: 111px;
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      background: url(../../images/woman-bg.png) no-repeat;
    }
  }

  .rate {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  .charts {
    height: 100px;
  }
}
</style>
