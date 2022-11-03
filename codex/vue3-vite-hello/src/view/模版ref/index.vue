<template>
  <div>
    <h1 ref="h1">模版ref使用</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';



/**
 * 场景一：获取模版中某个元素的dom对象
 * 步骤：
  1. 创建 ref =>  `const hRef = ref(null)`
  2. 模板中建立关联  =>  `<h1 ref="hRef">我是标题</h1>`
  3. 使用 => `hRef.value` 获取绑定元素的dom对象
 */
const h1 = ref(null)

onMounted(()=>{
  console.log('组件挂在后：',h1.value)
  h1.value.style.border = '10px solid red'
})

</script>

<style lang="scss" scoped>

</style>