<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Express } from '@/types/medicine'
import { getMedicalOrderLogistics } from '@/api/medicine'
import { useRoute } from 'vue-router'

// 物流详情数据
const express = ref<Express>()
// 获取物流详情数据
const route = useRoute()
const getExpress = async () => {
  const { data } = await getMedicalOrderLogistics(route.params.id as string)
  console.log('物流详情：', data)
  express.value = data
}
onMounted(() => {
  getExpress()
})
</script>

<template>
  <div class="order-logistics-page" v-if="express">
    <!-- 1. 高德地图挂载渲染位置 -->
    <div id="map">
      <!-- 配送状态title -->
      <div class="title">
        <van-icon name="arrow-left" @click="$router.back()" />
        <span>{{ express.statusValue }}</span>
        <van-icon name="service" />
      </div>
      <!-- 物流信息 -->
      <div class="current">
        <p class="status">订单{{ express.statusValue }} 预计{{ express.estimatedTime }}送达</p>
        <p class="predict">
          <!-- 快递信息 -->
          <span>{{ express.name }}</span>
          <span>{{ express.awbNo }}</span>
        </p>
      </div>
    </div>
    <!-- 2. 物流派送的详细信息：使用时间轴展现的 -->
    <div class="logistics">
      <p class="title">物流详情</p>
      <van-steps direction="vertical" :active="0">
        <!-- van-step单个时间轴 -->
        <van-step v-for="item in express.list" :key="item.id">
          <p class="status">{{ item.statusValue }}</p>
          <p class="content">{{ item.content }}</p>
          <p class="time">{{ item.createTime }}</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-logistics-page {
  --van-step-icon-size: 18px;
  --van-step-circle-size: 10px;
}
#map {
  height: 450px;
  background-color: var(--cp-bg);
  overflow: hidden;
  position: relative;
  .title {
    background-color: #fff;
    height: 46px;
    width: 355px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 16px;
    position: absolute;
    left: 10px;
    top: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 22px 0px rgba(229, 229, 229, 0.5);
    z-index: 999;
    > span {
      flex: 1;
      text-align: center;
    }
    .van-icon {
      font-size: 18px;
      color: #666;
      &:last-child {
        color: var(--cp-primary);
      }
    }
  }
  .current {
    height: 80px;
    border-radius: 4px;
    background-color: #fff;
    height: 80px;
    width: 355px;
    box-sizing: border-box;
    padding: 15px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    box-shadow: 0px 0px 22px 0px rgba(229, 229, 229, 0.5);
    z-index: 999;
    .status {
      font-size: 15px;
      line-height: 26px;
    }
    .predict {
      color: var(--cp-tip);
      font-size: 13px;
      margin-top: 5px;
      > span {
        padding-right: 10px;
      }
    }
  }
}
.logistics {
  padding: 0 10px 20px;
  .title {
    font-size: 16px;
    padding: 15px 5px 5px;
  }
  .van-steps {
    :deep(.van-step) {
      &::after {
        display: none;
      }
    }
    .status {
      font-size: 15px;
      color: var(--cp-text3);
      margin-bottom: 4px;
    }
    .content {
      font-size: 13px;
      color: var(--cp-tip);
      margin-bottom: 4px;
    }
    .time {
      font-size: 13px;
      color: var(--cp-tag);
    }
  }
}
</style>
