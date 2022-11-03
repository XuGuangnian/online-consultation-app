<template>
  <div>
   <h2>子组件</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. 子组件准备好方法
  const validate=()=>{
    console.log(123)
  }
  const msg = ref('abc')
  // 2. 提供方法（暴漏）=> 全局宏方法
  defineExpose({
    validate,
    zd:msg
  })
</script>

<style lang="scss" scoped>

</style>