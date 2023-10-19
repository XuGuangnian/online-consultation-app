<template>
  <h1>首页</h1>
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
  <hr />
  <p>{{ newList }}</p>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import axios from 'axios'
import _ from 'lodash'
// 说明：type 声明=》说明导入的是类型
import type { List } from '../../types/home.d'

// 导入别人写好的js文件
import { add } from '../../utils/add'

console.log(axios.get)

console.log('lodash:', _.isArray([]))

add(1, 1)

// 1. ref函数
// 简单类型=> 可以不用传递范型参数指定类型=》类型推断
const count = ref<number>(1)
count.value = 100

const show = ref(true)
show.value = false

// 复杂类型 =》需要指定类型
const list = ref<List>([])
list.value = [
  { id: 0, name: '学习', isDone: true },
  { id: 1, name: '背面试题', isDone: false },
  { id: 2, name: '打豆豆', isDone: false },
]

// 需求：获取未完成的任务列表并绑定渲染
const newList = computed(() => {
  // 根据返回值=》类型推断机制会自动推导类型
  return list.value.filter((item) => item.isDone === false)
})

let arr = [1, 2, 3]

arr.filter
</script>

<style scoped></style>
