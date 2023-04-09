<template>
  <div>
    <h1>父组件</h1>
    <hr />
    <Son msg="123" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './son.vue'

// 父传子
const money = ref(1e5)
</script>

<style scoped></style>
