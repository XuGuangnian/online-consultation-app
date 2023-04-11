<template>
  <div>
    <h1>测试pinia</h1>
    <ul>
      <li>{{ store.count }}-{{ store.doubleCount }}</li>
      <li>
        <button @click="store.add()">同步修改store</button>
      </li>
      <li>
        <button @click="store.asyncAdd()">异步修改store</button>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 1. 导入创建store函数
import { useCountStore } from '../../store/count'

// 2. 获取count store
const store = useCountStore()

console.log('store：', store)
</script>

<style scoped></style>
