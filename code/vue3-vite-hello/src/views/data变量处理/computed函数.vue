<template>
  <div>
    <ul>
      <li>默认变量：{{ list }}</li>
      <li>经过计算大于60: {{ newList }}</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <hr />
  <div>
    <ul>
      <li v-for="(cj, i) in newList" :key="i">{{ cj }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
/**
 * computed函数（计算属性）
 * 作用：根据一个或多个data变量，return 得到一个==新变量==
 * 步骤：
- 1. 从 `vue` 中导入 `computed` 函数
- 在 `setup` 函数中，使用 `computed` 函数，传入一个函数，函数返回计算好的数据
- 最后 `setup` 函数返回一个对象，包含该计算属性数据即可，然后模板内使用

== 语法：const 计算属性变量名 = computed(()=>{  return 根据一个或多个data变量计算得到的新值  }) ==
 */
// list变量存储的是学生的成绩
const list = ref([20, 30, 90, 10, 100, 80])
// 需求：根据list得到一个新数组，里边的成绩要求大于60
const newList = computed(() => {
  return list.value.filter((item) => item > 60)
})
</script>

<style lang="scss" scoped></style>
