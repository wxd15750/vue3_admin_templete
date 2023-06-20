<template>
  <div class="container">
    <!-- 数据大屏内容展示区域 -->
    <div class="screen">
      <div class="top">顶部</div>
      <div class="bottom">
        <div class="left">左侧</div>
        <div class="center">中间</div>
        <div class="right">右侧</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Screen',
})
</script>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;
}
</style>
