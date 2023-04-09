<template>
  <ul>
    <li>{{ count }}</li>
    <li v-if="show">show</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <hr />
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 1. ref函数
// 简单类型=> 可以不用传递范型参数指定类型=》类型推断
const count = ref<number>(1)
count.value = 100

const show = ref(true)
show.value = false

// 复杂类型 =》需要指定类型
type List = {
  id: number
  name: string
}[]
const list = ref<List>([])

list.value = [
  { id: 0, name: '学习' },
  { id: 1, name: '背面试题' },
]
</script>

<style scoped></style>
