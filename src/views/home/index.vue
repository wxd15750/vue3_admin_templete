<template>
  <div>
    <h1>我是首页456</h1>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>

    <el-card class="box-card2">
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
})
</script>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.box-card2 {
  margin-top: 30px;
}
</style>
