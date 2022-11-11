<template>
  <div class="layout-page">
    <!-- 上部：显示子路由页面 -->
    <router-view />

    <!-- 底部：tabBar组件 
    route 开启路由模式
    -->
    <van-tabbar route>
      <van-tabbar-item to="/home">首页</van-tabbar-item>
      <van-tabbar-item to="/article">健康百科</van-tabbar-item>
      <van-tabbar-item to="/notify">消息中心</van-tabbar-item>
      <van-tabbar-item to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
