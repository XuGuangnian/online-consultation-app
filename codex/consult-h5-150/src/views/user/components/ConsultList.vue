<script setup lang="ts">
import { ref } from 'vue'
import ConsultItem from './ConsultItem.vue'
// 获取订单列表实现上拉加载更多
// 1. 列表数据
const list = ref<number[]>([])
// 2. 列表加载状态：true 显示加载中loading | false 关闭loading
const loading = ref(false)
// 3. 列表是否加载完成：true 加载完成 | false 还有数据（加载未完成）
const finished = ref(false)
/**
 * 4. 加载数据的方法：
      1. 默认页面加载会执行一次（有数据情况，不够一屏，会再次加载）
      2. 用户每次滚动到上次数据的底部，会再次执行
 */
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }
    console.log('列表数据：', list.value)

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 30) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <div class="consult-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- 订单列表：循环渲染问诊订单数据 -->
      <consult-item v-for="i in list" :key="i" />
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.consult-list {
  padding: 10px 15px;
}
</style>
