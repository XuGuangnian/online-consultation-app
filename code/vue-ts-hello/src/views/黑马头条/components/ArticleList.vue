<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getNews } from '../../../api/channel'
import { Result } from '../../../types/channel'
import { useChannelStore } from '../../../store/channel'

// 接收当前点击选中的菜单ID
// const props = defineProps<{
//   channelId: number
// }>()

const store = useChannelStore()

// 需求：点击对应菜单，显示当前菜单下的新闻列表
// 问题：怎么知道菜单点击变化了？=》监听channelId变化，重新发请求
// 问题：props是个对象，对象中其他属性发生变化，也会执行监听函数
// watch(props, (newId) => {
//   console.log('channelId变化:', newId.channelId)
// })
// 需求：只有channelId变化，才会执行监听函数
const list = ref<Result[]>([])
watch(
  () => store.channelId, // 通过函数返回要监听对象中某个属性
  async (newId) => {
    console.log('channelId变化:', newId)
    const res = await getNews({ channel_id: newId, timestamp: Date.now() })
    console.log('新闻列表：', res)
    list.value = res.results
  },
  {
    immediate: true, // 组件默认加载后，立即执行监听函数=》获取推荐新闻
  }
)

// 获取新闻列表数据
// const list = ref<Result[]>([])
// onMounted(async () => {
//   const res = await getNews({ channel_id: 0, timestamp: Date.now() })
//   console.log('新闻列表：', res)
//   list.value = res.results
// })
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
