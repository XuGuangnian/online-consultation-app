<script setup lang="ts">
import RoomStatus from './components/RoomStatus.vue'
import RoomAction from './components/RoomAction.vue'
import RoomMessage from './components/RoomMessage.vue'
</script>

<template>
  <div class="room-page">
    <cp-nav-bar title="医生问诊室" />
    <!-- 1. 顶部订单状态 -->
    <room-status />
    <RoomMessage />
    <!-- 2. 底部订单操作栏 -->
    <room-action />
  </div>
</template>
