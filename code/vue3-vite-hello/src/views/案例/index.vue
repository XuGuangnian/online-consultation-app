<template>
  <div class="app">
    <el-table :data="list" border>
      <!-- el-table-column 指定某一列显示什么数据 -->
      <el-table-column label="ID" prop="goods_id"></el-table-column>
      <el-table-column label="图片" prop="goods_img">
        <!-- 作用域插槽=>自定义显示的内容  -->
        <template #default="{ row }">
          <img class="img" :src="row.goods_img" />
        </template>
      </el-table-column>
      <el-table-column
        label="商品"
        prop="goods_name"
        width="150"
      ></el-table-column>
      <el-table-column label="价格" prop="goods_price"></el-table-column>
      <el-table-column label="操作" width="100">
        <template v-slot="{ row }">
          <el-button type="danger" link @click="delRow(row.goods_id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
// 获取列表数据
const list = ref([])
const geList = async () => {
  const res = await axios.get('https://applet-base-api-t.itheima.net/api/cart')
  list.value = res.data.list
  console.log('列表数据：', res.data.list)
}

onMounted(() => {
  geList()
})

// 删除数据
const delRow = async (id) => {
  list.value = list.value.filter((item) => item.goods_id !== id)
}
</script>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
.img {
  display: inline-block;
  width: 200px;
  height: 200px;
}
</style>
