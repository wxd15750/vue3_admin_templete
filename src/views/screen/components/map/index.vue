<template>
  <div class="maps" ref="map"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Map',
})
</script>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
// 引入中国地图的数据
import chinaJson from './china.json'
let map = ref()
// 先注册中国地图
echarts.registerMap('china', chinaJson as any)
onMounted(() => {
  let mymap = echarts.init(map.value)
  // 设置配置项
  mymap.setOption({
    // 地图组件
    geo: {
      map: 'china', // 中国地图
      // roam: true, // 鼠标缩放的效果
      left: 80,
      top: 120,
      right: 40,
      bottom: -160,
      zoom: 1,

      // 地图上的文字显示
      label: {
        // show: true,
        color: '#fff',
        fontSize: 12,
      },
      itemStyle: {
        areaColor: 'rgba(104,216,254,.6)',
        borderColor: 'rgba(104,216,254,1)',
      },
      // 地图高亮的效果
      // emphasis: {
      //   itemStyle: {
      //     color: 'skyblue',
      //   },
      //   label: {
      //     fontSize: 20,
      //   },
      // },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(104,216,254,1)',
        },
        label: {
          show: true,
          color: '#fff',
        },
      },
    },

    // 布局位置
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    // 路线
    series: [
      {
        type: 'lines', // 航线
        // lineStyle: {
        //   width: 2,
        //   color: '#fff',
        //   curveness: 0.2,
        // },
        data: [
          // {
          //   coords: [
          //     [116.4551, 40.8539],
          //     [111.5547, 22.1484],
          //   ],
          // },
          // {
          //   coords: [
          //     [116.4551, 40.8539],
          //     [120.0254, 23.5986],
          //   ],
          // },
          // {
          //   coords: [
          //     [116.4551, 40.8539],
          //     [84.9023, 42.148],
          //   ],
          // },
          {
            coords: [
              [116.405285, 39.904989], // 起点北京
              [121.472644, 31.231706],
            ],
            // 统一的样式设置
            lineStyle: {
              color: '#fff',
              width: 4,
              cap: 'round',
              curveness: -0.1,
            },
          },
          {
            coords: [
              [116.405285, 39.904989], // 起点北京
              [110.33119, 20.031971],
            ],
            // 统一的样式设置
            lineStyle: {
              color: '#fff',
              width: 4,
              cap: 'round',
              curveness: -0.2,
            },
          },

          {
            coords: [
              [87.617733, 43.792818], // 起点北京
              [108.948024, 34.263161], // 终点陕西
            ],
            // 统一的样式设置
            lineStyle: {
              color: '#fff',
              width: 4,
              cap: 'round',
              curveness: -0.2,
            },
          },
          {
            coords: [
              [116.405285, 39.904989], // 起点北京
              [108.948024, 34.263161], // 终点陕西
            ],
            // 统一的样式设置
            lineStyle: {
              color: '#fff',
              width: 4,
              cap: 'round',
              curveness: -0.2,
            },
          },
          {
            coords: [
              [121.472644, 31.231706], // 起点北京
              [108.948024, 34.263161], // 终点陕西
            ],
            // 统一的样式设置
            lineStyle: {
              color: '#fff',
              width: 4,
              cap: 'round',
              curveness: -0.2,
            },
          },
          {
            coords: [
              [108.948024, 34.263161], // 起点北京
              [110.33119, 20.031971], // 终点海南
            ],
            // 统一的样式设置
            lineStyle: {
              color: '#fff',
              width: 4,
              cap: 'round',
              curveness: -0.2,
            },
          },
          {
            coords: [
              [108.948024, 34.263161], // 起点北京
              [120.153576, 30.287459], // 终点海南
            ],
            // 统一的样式设置
            lineStyle: {
              color: '#fff',
              width: 4,
              cap: 'round',
              curveness: -0.2,
            },
          },
        ],

        // 是否显示特效
        effect: {
          show: true,
          symbol:
            'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
          symbolSize: 15,
          trailLength: 0,
        },
      },

      // 地图上的点
      {
        type: 'effectScatter',
        coordinateSystem: 'geo', //点是用地理坐标
        data: [
          // 一个数组代表一个点
          [116.405285, 39.904989, '北京'],
          [121.472644, 31.231706, '上海'],
          [110.33119, 20.031971, '海南'],
          [87.617733, 43.792818, '新疆'],
          [108.948024, 34.263161, '西安'],
          [120.153576, 30.287459, '杭州'],
        ],
        itemStyle: {
          color: '#fff',
        },
        label: {
          show: true,
          formatter: '{@[2]}',
          color: '#fff',
          position: 'right',
        },
      },
    ],
  })
})
</script>

<style lang="scss" scoped></style>
