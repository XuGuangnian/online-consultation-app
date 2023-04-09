<template>
  <div>
    <h2>儿子组件</h2>
    <p>{{ money }}</p>
  </div>
</template>

<script setup lang="ts">
// 接收父传子变量定义类型：defineProps<{key1:type1, key2:type2...}>()
// const props = defineProps<{
//   money: number
//   msg?: string // 加个?可选属性
// }>()
const { money = 100 } = defineProps<{
  money?: number
  msg?: string // 加个?可选属性
}>()

console.log(money)
</script>

<style scoped></style>
