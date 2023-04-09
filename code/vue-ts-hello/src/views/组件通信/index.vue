<template>
  <div>
    <h1>父组件</h1>
    <hr />
    <Son
      :money="money"
      msg="123"
      @change-money="changeMoney"
      @change-msg="changeMsg"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './son.vue'

// 父传子
const money = ref(1e5)

// 子传父回调
/**
 *
 * @param mky 子传父数据
 */
const changeMoney = (mky: number) => {
  console.log('子传父：', mky)
  money.value = mky
}

const changeMsg = (msg: string) => {
  console.log('子传父-msg:', msg)
}
</script>

<style scoped></style>
