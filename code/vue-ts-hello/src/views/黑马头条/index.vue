<script setup lang="ts">
// 公共样式
import './styles/index.css'
// 菜单
import ChannelNav from './components/ChannelNav.vue'
// 文章列表
import ArticleList from './components/ArticleList.vue'
</script>

<template>
  <!-- 菜单组件 -->
  <ChannelNav />
  <!-- 新闻列表 -->
  <ArticleList />
</template>
