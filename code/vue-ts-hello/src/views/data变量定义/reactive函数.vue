<template>
  <div></div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// 1. 设置默认值了会自动推导类型=》不推荐
const person = reactive({ name: '小红', age: 18 })

// 2. 设置空对象作为默认值=> 推荐
type Person = {
  name: string
  age: number
}
const person2 = reactive({} as Person)
</script>

<style scoped></style>
