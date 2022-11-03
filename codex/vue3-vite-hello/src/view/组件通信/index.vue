<template>
  <div>
    <h1>父组件</h1>
    <hr>
    <Son 
    :money="money" 
    :msg="msg" 
    @change-mky="changeMky" />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Son from './son.vue'
// 场景一：父传子
// 1. 父组件准备共享数据
const money = ref(1e6)

const msg = ref('我是你老子！')

// 场景二：子传父 =》 == 单向数据流 ==
// 1. 父组件准备自定义事件和回调函数
/**
 * 
 * @param {*} mky 子组件传过来数据
 */
const changeMky=(mky)=>{
  console.log("接收子组件数据：", mky)
  money.value = mky
}



</script>

<style lang="scss" scoped>

</style>