<template>
  <div>
    <h1 class="test">测试页面</h1>
    <!-- <Son v-model="show" v-model:msg="msg"></Son> -->
    <Son
      :model-value="show"
      @update:model-value="show = $event"
      :msg="msg"
      @update:msg="msg = $event"
    ></Son>

    <hr />
    <p class="cp-use" style="font-size: 18px">我是p元素</p>
    <img src="@/icons/consult/alipay.svg" alt="" />
    <!-- 测试精灵图 -->
    <svg aria-hidden="true">
      <!-- #icon-文件夹名称-图片名称 -->
      <use href="#icon-login-eye-off" />
    </svg>
    <svg aria-hidden="true">
      <!-- #icon-文件夹名称-图片名称 -->
      <use href="#icon-home-docs" />
    </svg>
    <hr />
    <!-- 问题❓：使用打包后的精灵图，比较麻烦，
      优化需求：<cp-icon name="home-docs" />
    api: name=文件夹名称-图片名称
    -->
    <cp-icon name="home-docs" />
    <cp-icon name="consult-alipay" />

    <ul>
      <li>{{ store.user }}</li>
      <li @click="changeUser">修改user</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <hr />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script setup lang="ts">
// import { useUserStore } from '@/stores/modules/user'
import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'

// 导入封装request
import { request } from '@/utils/request'
import { onMounted, ref } from 'vue'
import Son from './son.vue'
const show = ref(true)
const msg = ref('hi')
const store = useUserStore()
// 点击修改用户store全局数据
const changeUser = () => {
  store.setUser({
    token: '123',
    id: '1',
    account: '',
    mobile: '13888888888',
    avatar: ''
  })
}
// 获取当前页面地址
const route = useRoute()
console.log('路由对象：', route)
// 测试request方法
// 测试401
const getHome = async () => {
  const res = await request.get('/patient/myUser')
  console.log(res)
}
// 测试正常和异常
const login = async () => {
  const res = await request.post('/login/password', {
    mobile: '13211112222',
    // 密码 abc123456 测试：出现非10000的情况
    password: 'abc12345000'
  })
  console.log('登录成功：', res)
}

onMounted(() => {
  // getHome()
  login()
})
</script>

<style lang="scss" scoped>
// 1. 通过scss定义css变量 => 语法：$变量名:css变量值
// 说明：scss定义的变量最终通过sass打包成css
$fontColor: red;
$divBd: 2px solid rgb(0, 123, 255);
.test {
  color: $fontColor;
  font-size: 16px;
  border: var(--cp-div-bd);
}
</style>
