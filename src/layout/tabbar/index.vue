<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar_right">
      <Setting></Setting>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tabbar',
})
</script>
<script lang="ts" setup>
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  // background-image: linear-gradient(
  //   to right,
  //   rgb(134, 127, 127),
  //   rgb(150, 149, 149),
  //   rgb(209, 207, 207)
  // );
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
