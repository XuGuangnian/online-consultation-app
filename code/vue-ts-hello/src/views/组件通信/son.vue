<template>
  <div>
    <h2>儿子组件</h2>
    <p>{{ money }}</p>
  </div>
</template>

<script setup lang="ts">
// 接收父传子变量定义类型：defineProps<{key1:type1, key2:type2...}>()
// const props = defineProps<{
//   money: number
//   msg?: string // 加个?可选属性
// }>()
const { money = 100 } = defineProps<{
  money?: number
  msg?: string // 加个?可选属性
}>()

console.log(money)

// 子传父=> emit('事件名', data) 等价于 this.$emit('事件名', data)
// const emit = defineEmits(['change-money'])
// 子传父=> 使用ts定义类型=>给 emit函数定义类型
const emit = defineEmits<{
  (e: 'change-money', data: number): void // 自定义事件1
  (e: 'change-msg', msg: string): void // 自定义事件2
}>()
emit('change-money', 2e6)

emit('change-msg', '我是msg')
</script>

<style scoped></style>
