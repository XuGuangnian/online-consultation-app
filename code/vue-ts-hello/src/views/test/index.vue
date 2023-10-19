<template>
  <div>
    <h1>测试pinia</h1>
    <ul>
      <li>{{ count }}-{{ doubleCount }}</li>
      <li>{{ person }}</li>
      <li>
        <button @click="store.add()">同步修改store</button>
      </li>
      <li>
        <button @click="store.asyncAdd()">异步修改store</button>
      </li>
      <li>
        <button @click="store.person.age++">直接修改</button>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 1. 导入创建store函数
import { useCountStore } from '../../store/count'
import { storeToRefs } from 'pinia'

// 2. 获取count store
const store = useCountStore()

// 解构store中变量(不能解构方法)
const { count, doubleCount, person } = storeToRefs(store)

console.log('store：', store)
</script>

<style scoped></style>
