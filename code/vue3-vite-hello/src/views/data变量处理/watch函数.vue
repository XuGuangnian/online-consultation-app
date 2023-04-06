<template>
  <div>watch函数</div>
  <ul>
    <li>{{ count }}</li>
    <li>
      <button @click="count++">add</button>
    </li>
    <li>{{ person }}</li>
    <li>
      <button @click="person.age++">修改年龄</button>
    </li>
    <li></li>
    <li></li>
  </ul>
</template>

<script setup>
import { watch, ref } from 'vue'
/**
 * watch函数（监听属性）
 * 作用：监听某个data变量变化，变量变化后执行回调函数，干事儿
 * 1. 监听一个变量变化：watch(变量, ()=>{...}, {deep:true, immediate: true})
 * 2. 监听多个变量变化：watch([变量1, 变量2...], ()=>{...}, {deep:true, immediate: true})
 */
// 1. 简单类型
const count = ref(1)
watch(count, (newVal, oldVal) => {
  console.log('count变化了：', newVal, oldVal)
})
// 2. 复杂类型
const person = ref({
  name: '程旭',
  age: 18,
  sarlay: 18000,
})
watch(
  person,
  (newVal, oldVal) => {
    // 说明：地址一样，所以新老值一样的
    console.log('person变化了：', newVal, oldVal)
  },
  {
    deep: true, // 开启深度监控
    immediate: true, // 组件加载后，立即执行一次监听函数
  }
)
</script>

<style lang="scss" scoped></style>
