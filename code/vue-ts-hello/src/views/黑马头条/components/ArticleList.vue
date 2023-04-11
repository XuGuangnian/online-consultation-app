<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getNews } from '../../../api/channel'
import { Result } from '../../../types/channel'

// 获取新闻列表数据
const list = ref<Result[]>([])
onMounted(async () => {
  const res = await getNews({ channel_id: 0, timestamp: Date.now() })
  console.log('新闻列表：', res)
  list.value = res.results
})
</script>

<template>
  <div class="article-list">
    <div class="article-item" v-for="item in list" :key="item.art_id">
      <p class="title">{{ item.title }}</p>
      <img
        v-for="(src, i) in item.cover.images"
        :key="i"
        class="img"
        :src="src"
        alt=""
      />
      <div class="info">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>
