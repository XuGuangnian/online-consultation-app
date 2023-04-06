<template>
  <div>
    <h1 ref="h1Ref">模版ref使用</h1>
    <hr />
    <!-- <ElForm></ElForm> -->
    <el-form ref="formRef"></el-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 导入组件 => 导入即注册=》元素名为导入的组件的名字
import ElForm from './son.vue'
/**
 * 模版ref使用
 * 1-获取dom对象
 * 步骤：
    1. 创建 ref =>  `const hRef = ref(null)`
    2. 模板中建立关联  =>  `<h1 ref="hRef">我是标题</h1>`
    3. 使用 => `hRef.value`
 * 2-获取组件实例
   场景：调用组件提供的方法   
 */
// 1-获取dom对象 (了解)
const h1Ref = ref()
// 问题：能不能获取h1 dom? => 不能
console.log('setup-获取h1 dom：', h1Ref.value)
onMounted(() => {
  // 组件挂载渲染完了执行
  // vue2: this.$refs.ref值 ===  vue3: h1Ref.value
  console.log('onMounted-获取h1 dom：', h1Ref.value)
  h1Ref.value.style.border = '10px solid pink'
})

// 2-获取组件实例(掌握了解)
const formRef = ref()
onMounted(() => {
  // vue2: this.$refs.formRef.validate() => 说明：this.$refs.formRef等价于son.vue的this
  console.log('获取form组件实例：', formRef.value)
  formRef.value.validate()
  formRef.value.meng()
})
</script>

<style lang="scss" scoped></style>
