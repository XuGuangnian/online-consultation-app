<template>
  <div>
    <h1>事件处理与ts</h1>
    <input ref="inputDom" type="text" @change="getValue" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

/**
 * 1. 通过$event查看事件对象的类型
 * 2. 通过document.querySelector('input').__proto__获取某个html元素类型
 */
const getValue = (e: Event) => {
  // e.stopPropagation
  console.log('获取输入框值：', (e.target as HTMLInputElement).value)
}

// 获取dom对象
const inputDom = ref<HTMLInputElement>()
onMounted(() => {
  inputDom.value?.focus()
})
</script>

<style scoped></style>
