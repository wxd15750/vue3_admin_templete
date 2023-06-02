<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
})
</script>
<script lang="ts" setup>
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 使用图标的名称
  name: String,
  // 接受父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  // 接受父组件传递的宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接受父组件传递的高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="less" scoped></style>
