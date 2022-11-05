<template>
  <div>
    <h3>孙子</h3>
    <p @click="changeMky(1e4)">收到爷爷的钱💰：{{mky}}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue';

 
// 2.接受注入的数据=》语法：inject('注入数据名字')
const mky = inject('money')
const changeMky = inject('changeMky')



</script>

<style lang="scss" scoped>

</style>