<template>
  <div>
    <h2>子组件</h2>
    <p>{{ money }}</p>
    <hr />
    <GrandSon />
  </div>
</template>

<script setup>
import GrandSon from './grandSon.vue'
// vue2接收：props:{ key1:Type... } = emits:['事件名1', '事件名2'...]
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
// 2. 子传父=》
// vue2: this.$emit('事件名', data)
// vue3: defineEmits(['事件名1', '事件名2'...])=> emit等价于this.$emit
const emit = defineEmits(['change-money'])
emit('change-money', 2e5)
</script>

<style lang="scss" scoped></style>
