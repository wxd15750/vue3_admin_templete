<template>
  <div class="countContainer">
    <div class="title">
      <p>数据统计</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <!-- 图形图标容器 -->
    <div class="charts" ref="countcharts"></div>
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
let countcharts = ref()

onMounted(() => {
  let mycharts = echarts.init(countcharts.value)
  let option = {
    title: {
      // text: '游客消费统计',
    },

    radar: {
      // shape: 'circle',
      indicator: [
        { name: '消费', max: 6500 },
        { name: '好感度', max: 16000 },
        { name: '出行', max: 30000 },
        { name: '日销量', max: 38000 },
        { name: '美食', max: 52000 },
        { name: '景点', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '购物',
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '吃饭',
          },
        ],
      },
    ],
  }
  mycharts.setOption(option)
})
</script>

<style lang="scss" scoped>
.countContainer {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 20px;
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
