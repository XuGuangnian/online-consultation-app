<template>
  <div>
    <h2>子组件</h2>
    <p>{{ money }}</p>
  </div>
</template>

<script setup>
// vue2接收：props:{ key1:Type... }
// 2. 接收父组件传递的数据=》defineProps({ key1:Type... })
const props = defineProps({
  // money:Number
  money: {
    type: Number, // 类型约束=>类似typescript,给js变量添加类型约束
    default: 100, // 默认值
  },
  meng: String,
})
// 注意：js中使用父传子的数据，需要接收defineProps函数的返回值
console.log('js使用父传子数据：', props)
</script>

<style lang="scss" scoped></style>
