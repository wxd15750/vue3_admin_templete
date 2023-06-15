<template>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Main',
})
</script>
<script lang="ts" setup>
import { watch, ref, nextTick } from 'vue'
// 获取组件的小仓库
import useLayoutSettingStore from '@/store/modules/setting'
const layoutSettingStore = useLayoutSettingStore()
// 控制当前组件是否销毁重建
let flag = ref(true)

// 监听仓库内部的数据是否发生变化,如果发生变化，说明用户点击过刷新按钮
watch(
  () => layoutSettingStore.refsh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
