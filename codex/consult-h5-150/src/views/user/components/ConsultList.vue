<script setup lang="ts">
import { getConsultOrderList } from '@/api/consult'
import type { ConsultType } from '@/enums'
import type { ConsultOrderItem } from '@/types/consult'
import { ref } from 'vue'
import ConsultItem from './ConsultItem.vue'

// 接收获取订单的类型
const props = defineProps<{
  type: ConsultType
}>()
// 获取订单列表实现上拉加载更多
// 1. 列表数据
const list = ref<ConsultOrderItem[]>([])
// 请求分页参数
const params = {
  type: props.type, // 订单类型
  current: 1, // 当前请求第几页，默认第一页
  pageSize: 10 // 每页多少条数据
}

// 2. 列表加载状态：true 显示加载中loading | false 关闭loading
const loading = ref(false)
// 3. 列表是否加载完成：true 加载完成 | false 还有数据（加载未完成）
const finished = ref(false)
/**
 * 4. 加载数据的方法：
      1. 默认页面加载会执行一次（有数据情况，不够一屏，会再次加载）
      2. 用户每次滚动到上次数据的底部，会再次执行
 */
const onLoad = async () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  const { data } = await getConsultOrderList(params)
  // 追加当前页数据到列表
  list.value.push(...data.rows)
  console.log('订单列表：', data.rows)

  // 数据请求成功后：关闭加载loading
  loading.value = false

  // 数据全部加载完成
  if (list.value.length === data.total) {
    // 数据加载完了
    finished.value = true
  } else {
    // 为下一次执行做准备？页码加一
    params.current++
  }
}
// 订单删除后，更新列表
const onDelete = (id: string) => {
  list.value = list.value.filter((item) => item.id !== id)
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
      <consult-item @on-delete="onDelete" v-for="item in list" :key="item.id" :item="item" />
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.consult-list {
  padding: 10px 15px;
}
</style>
