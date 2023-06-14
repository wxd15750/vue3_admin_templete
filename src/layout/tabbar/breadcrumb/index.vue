<template>
  <!-- 顶部左侧的图标 -->
  <el-icon style="margin-right: 10px">
    <Expand></Expand>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Breadcrumb',
})
</script>
<script lang="ts" setup></script>

<style lang="scss" scoped></style>
