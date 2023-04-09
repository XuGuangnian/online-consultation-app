<template>
  <div>
    <!-- 说明：$event获取事件对象,可以查看事件对象的类型 -->
    <input ref="inputRef" type="text" @change="getVal($event)" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// 1. 事件处理
const getVal = (e: Event) => {
  console.log('事件对象：', e)
  // 怎么查看某个html元素类型？=》document.querySelector('元素名').__proto__
  console.log('输入框输入的值：', (e.target as HTMLInputElement).value)
}

// 2. 模版ref获取dom对象
const inputRef = ref<HTMLInputElement>()
onMounted(() => {
  // inputRef.value?.value => ?是js可选链操作符
  // 说明：inputRef.value可能是null，如果是null=>null.value 就报错
  // 使用 ?是js可选链操作符可以避免报错增强代码的健壮性
  console.log('获取input-dom:', inputRef.value, inputRef.value?.value)
})
</script>

<style scoped></style>
