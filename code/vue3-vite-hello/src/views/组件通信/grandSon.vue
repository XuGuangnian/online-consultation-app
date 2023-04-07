<template>
  <div>
    <h3>孙子组件</h3>
    <p>{{ money }}</p>
    <button @click="cg(2e3)">修改爷爷数据</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'
// 2. 接收注入的数据 =》 const 变量名 = inject('注入数据的名字')
const money = inject('mky')
// 接收修改数据的方法
const cg = inject('change-mky')
</script>

<style lang="scss" scoped></style>
