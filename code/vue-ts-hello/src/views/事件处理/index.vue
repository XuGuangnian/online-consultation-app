<template>
  <div>
    <!-- 说明：$event获取事件对象,可以查看事件对象的类型 -->
    <input type="text" @change="getVal($event)" />
  </div>
</template>

<script setup lang="ts">
const getVal = (e: Event) => {
  console.log('事件对象：', e)
  // 怎么查看某个html元素类型？=》document.querySelector('元素名').__proto__
  console.log('输入框输入的值：', (e.target as HTMLInputElement).value)
}
</script>

<style scoped></style>
