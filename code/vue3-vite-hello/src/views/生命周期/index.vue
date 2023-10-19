<template>
  <div></div>
</template>

<script setup>
// 1. 导入生命周期钩子函数
import { onMounted } from 'vue'
// 2. 使用=> 语法：onMounted(()=>{ ... })
onMounted(() => {
  /**
   * 使用场景：
   * 1. 发送ajax（axios插件）请求，获取后台数据
   * 2. 操作dom
   */
  console.log('onMounted1')
})
onMounted(() => {
  console.log('onMounted2')
})
</script>

<style lang="scss" scoped></style>
