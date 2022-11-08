<template>
  <div>
    <h1>pinia使用</h1>
    <ul>
      <li>{{store.count}}</li>
      <li>{{store.doubleCount}}</li>
      <li @click="store.changeCount()">
        修改count
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 使用store
// 1. 导入pinia的store
import {useHelloStore} from '../../stores/hello'

// 2. 获取store
const store = useHelloStore()
console.log('store:',store)
</script>

<style scoped>

</style>