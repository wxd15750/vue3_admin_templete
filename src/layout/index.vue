<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu background-color="#001529" text-color="#fff">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <!-- 折叠菜单 -->
          <el-sub-menu index="3">
            <template #title>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">用户管理</el-menu-item>
            <el-menu-item index="2-2">角色管理</el-menu-item>
            <el-menu-item index="2-3">菜单管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示区 -->
    <div class="layout_main">
      <!-- <p style="height: 3000px">789</p> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Layout',
})
</script>
<script lang="ts" setup>
// 引入左侧菜单子组件
import Logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  // background-color: #e84a4a;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabber-height;
    background-color: #45c1ea;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabber-height);
    background-color: #48ca62;
    left: $base-menu-width;
    top: $base-tabber-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
