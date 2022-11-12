<script setup lang="ts">
import KnowledgeCard from './KnowledgeCard.vue'
import { ref } from 'vue'

// 列表数据
const list = ref<number[]>([])
// 列表加载状态：true 加载中 | false 加载完成 （多次触发）
const loading = ref(false)
// 控制列表数据是否加载完成：false 还有数据 | true 数据已经加载完毕
const finished = ref(false)
// 加载数据的函数：1. 页面打开后默认执行一次 2. 每次用户滚动到底部会再次执行
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <div class="knowledge-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- 列表数据 -->
      <!-- 知识列表item -->
      <knowledge-card v-for="i in 5" :key="i"></knowledge-card>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.knowledge-list {
  padding: 0 15px;
}
</style>
