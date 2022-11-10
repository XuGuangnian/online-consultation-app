<script setup lang="ts">
import { ref } from 'vue'
// 导入校验规则
import { mobileRules, passwordRules, codeRules } from '@/utils/rules'
import { Toast, type FormInstance } from 'vant'
// 导入账号密码登录api
import { loginByPassword, sendMobileCode, loginByMobile } from '@/api/user'
// 导入用户store
import { useUserStore } from '@/stores'
import { useRoute, useRouter } from 'vue-router'

const clickRight = () => {
  console.log('点击了右边文字')
}
// 是否同意网站使用协议
const agree = ref(false)
/**
 * 登录开发问题总结：
 * 1. api函数封装返回值问题
 * 2. ts类型使用问题
 * 3. 关于可选链操作符?使用
 */

/**
 * 一、动态切换密码框眼睛图标，控制是否显示密码
 * 1. 定义个响应变量isShowPass
 * 2. 根据isShowPass控制是否显示密码
 */
const isShowPass = ref(false)

/**
 * 二. 点击登录
 * 1. 账号密码登录
 * 2. 短信登录
 */
// 1. 账号密码登录
const store = useUserStore()
// 跳转页面使用
const router = useRouter()
// 获取路由参数
const route = useRoute()
// 准备账号密码响应变量
const mobile = ref('13230000088')
const password = ref('abc12345')
const login = async () => {
  console.log('校验通过了，才执行login')
  if (!agree.value) return Toast.fail('请勾选用户协议')
  // 进行登录
  try {
    // == 判断是账号密码还是短信登录，分别调用不同api接口 ==
    const res = isPass.value
      ? await loginByPassword(mobile.value, password.value)
      : await loginByMobile(mobile.value, code.value)
    // const res = await loginByPassword(mobile.value, password.value)
    console.log('登录成功：', res.data)
    store.setUser(res.data)
    // 说明：存在route.query.returnUrl回跳地址=》跳转returnUrl地址
    // 相反，默认跳转用户个人中心
    router.push((route.query.returnUrl as string) || '/user')
    Toast.success('登录成功')
  } catch (error) {
    console.log(error)
  }
}
// 2. 验证码登录
// == 发送验证码 ==
const isPass = ref(true) // true 密码登录 | false 短信登录
const code = ref('') // 验证码
const time = ref(0) // 倒计时时间
const form = ref<FormInstance>() // 获取表单实例
let timeId: number // 倒计时定时器ID
const send = async () => {
  // 已经倒计时time的值大于0，60s内不能重复发送验证码
  if (time.value > 0) return
  try {
    // 输入手机号时，对手机号进行校验
    await form.value?.validate('mobile')
    const { data } = await sendMobileCode(mobile.value, 'login')
    Toast.success('发送成功')
    // 填入验证码
    code.value = data.code
    // 倒计时开始
    time.value = 60
    timeId = window.setInterval(() => {
      time.value--
      if (time.value <= 0) window.clearInterval(timeId)
    }, 1000)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <cp-nav-bar title="登录" rightText="注册" @click-right="clickRight"></cp-nav-bar>
  <div class="login">
    <!-- 1. 头部 -->
    <div class="login-head">
      <h3>{{ isPass ? '密码登录' : '短信验证码登录' }}</h3>
      <a href="javascript:;" @click="isPass = !isPass">
        <span>{{ !isPass ? '密码登录' : '短信验证码登录' }}</span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- == 2. form 表单 == -->
    <van-form @submit="login" ref="form" autocomplete="off">
      <!-- 1. 手机号输入框 -->
      <van-field
        name="mobile"
        v-model="mobile"
        :rules="mobileRules"
        placeholder="请输入手机号"
        type="tel"
      ></van-field>
      <!-- 2. 密码输入框 -->
      <van-field
        v-if="isPass"
        v-model="password"
        :rules="passwordRules"
        placeholder="请输入密码"
        :type="isShowPass ? 'text' : 'password'"
      >
        <template #button>
          <cp-icon
            @click="isShowPass = !isShowPass"
            :name="`login-eye-${isShowPass ? 'on' : 'off'}`"
          ></cp-icon>
        </template>
      </van-field>
      <!-- 3. 验证码输入 -->
      <van-field v-else v-model="code" :rules="codeRules" placeholder="短信验证码">
        <template #button>
          <span @click="send" :class="{ active: time > 0 }">
            {{ time > 0 ? `${time}s后再次发送` : '发送验证码' }}
          </span>
        </template>
      </van-field>
      <div class="cp-cell">
        <van-checkbox v-model="agree">
          <span>我已同意</span>
          <a href="javascript:;">用户协议</a>
          <span>及</span>
          <a href="javascript:;">隐私条款</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button native-type="submit" block round type="primary">登 录</van-button>
      </div>
      <div class="cp-cell">
        <a href="javascript:;">忘记密码？</a>
      </div>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: red;
}
.login {
  padding-top: 46px;
  &-head {
    padding: 30px 30px 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;
    h3 {
      font-weight: normal;
      font-size: 24px;
    }
    a {
      font-size: 15px;
    }
  }
  .van-form {
    padding: 0 14px;
    .cp-cell {
      height: 52px;
      padding: 14px 16px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .van-checkbox {
        a {
          color: var(--cp-primary);
          padding: 0 5px;
        }
      }
    }
  }
}
</style>
