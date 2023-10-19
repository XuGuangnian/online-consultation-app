<script setup lang="ts">
// 公共样式
import './styles/index.css'
// 菜单
import ChannelNav from './components/ChannelNav.vue'
// 文章列表
import ArticleList from './components/ArticleList.vue'
import { ref } from 'vue'
// 存储选中频道ID=》新闻列表也需要使用这个选中ID
const channelId = ref(0)
/**
 *
 * @param id 子传父的值=》选中的菜单ID
 */
const changeId = (id: number) => {
  channelId.value = id
}
</script>

<template>
  <!-- 菜单组件 -->
  <!-- 
   $event的值：
   1. 原生事件：事件对象
   2. 自定义事件：子传父的值=》选中的菜单ID

   -->
  <!-- <ChannelNav :channelId="channelId" @change-channel="channelId = $event" />
   -->
  <ChannelNav />

  <!-- 新闻列表 -->
  <ArticleList />
</template>
