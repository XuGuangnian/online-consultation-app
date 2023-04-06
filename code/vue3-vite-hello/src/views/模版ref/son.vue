<template>
  <div>
    <h2>表单子组件</h2>
  </div>
</template>

<script setup>
// vue2: 在methods里边定义方法validate
// 兜底检验方法=>问题：vue3默认情况下定义的方法外部不能直接访问
const validate = () => {
  console.log('兜底检验方法')
}
const test = () => {
  console.log(123)
}
// 解决：通过defineExpose全局宏函数，对外提供方法
defineExpose({
  // validate:validate
  validate, // 简写
  meng: test,
})
</script>

<style lang="scss" scoped></style>
