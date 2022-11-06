<script setup lang="ts">
import './styles/index.css'
import ChannelNav from './components/ChannelNav.vue'
import ArticleList from './components/ArticleList.vue'
</script>

<template>
  <!-- 1. 上边频道菜单组件 -->
  <ChannelNav />
  <!-- 2. 新闻列表 -->
  <ArticleList />
</template>
