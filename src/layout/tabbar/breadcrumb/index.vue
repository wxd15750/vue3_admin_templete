<template>
  <!-- 顶部左侧的图标 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包屑需要动态去展示路由的名字和标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="item.path"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon style="margin: 0 5px">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 面包屑匹配展示对应的路由 -->
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Breadcrumb',
})
</script>
<script lang="ts" setup>
import { ref } from 'vue'
// 获取路由对象
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'
// 获取layout相关的仓库
const layoutSettingStore = useLayoutSettingStore()
// 获取路由对象
const $route = useRoute()

// 点击图标的方法
const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>

<style lang="scss" scoped></style>
