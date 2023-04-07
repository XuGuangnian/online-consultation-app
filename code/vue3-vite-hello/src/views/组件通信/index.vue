<template>
  <div>
    <h1>父组件</h1>
    <hr />
    <!-- 1. 父传子=》:父传子属性名="data" -->
    <Son :money="money" meng="123" @change-money="changeMoney"></Son>
    <!-- 1. 子传父=》@事件名="回调函数" -->
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Son from './son.vue'
/**
 * 组件通信
 * 为什么通信？因为组件是一个封闭的单元，如果需要共享组件内的数据，就需要
 * 通过通信
 * 作用：共享组件内的数据
 * 1.父子通信（常用）
 *   父传子=》传数据
 *   子传父=》修改数据（传）=》原则：遵循单向数据流
 *
 *
 * 2.跨多级组件通信
 *  依赖注入=> provide('注入数据的名字', data)
 */
// 父传子
// 说明：科学计数法=》1e4 === 10000 =》e后边数字代表几个零
const money = ref(1e4)
const changeMoney = (mky) => {
  console.log('子传父数据：', mky)
  money.value = mky
}
// 1. 注入
provide('mky', money)
provide('change-mky', changeMoney)
</script>

<style lang="scss" scoped></style>
