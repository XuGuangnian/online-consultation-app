<template>
  <div>
    <h1 ref="h1Ref">模版ref使用</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
/**
 * 模版ref使用
 * 1-获取dom对象
 * 步骤：
    1. 创建 ref =>  `const hRef = ref(null)`
    2. 模板中建立关联  =>  `<h1 ref="hRef">我是标题</h1>`
    3. 使用 => `hRef.value`
 * 2-获取组件实例   
 */
const h1Ref = ref()
// 问题：能不能获取h1 dom? => 不能
console.log('setup-获取h1 dom：', h1Ref.value)
onMounted(() => {
  // 组件挂载渲染完了执行
  console.log('onMounted-获取h1 dom：', h1Ref.value)
  h1Ref.value.style.border = '10px solid pink'
})
</script>

<style lang="scss" scoped></style>
