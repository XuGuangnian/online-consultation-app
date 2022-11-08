import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// import Test from '@/views/test/index.vue'
const Test = () => import('@/views/test/index.vue')

// 路由配置数组
const routes = [
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

// 1. 创建路由实例
// 之前vue2：是通过 new Router创建路由实例
// 现在vue3：是通过createRouter创建路由实例
const router = createRouter({
  // vue2: 通过mode: 'history' | 'hash' 指定路由模式
  // vue3: 通过history：createWebHistory | createWebHashHistory 函数指定路由模式
  // import.meta.env.BASE_URL路由的基准地址，默认是 ’/‘
  // 一般项目打包后，都部署到服务器root根目录；但是公司可能会把项目部署到root下某个文件夹里，
  // 例如：部署到文件夹consult目录下，这时候需要在vite.config.ts配置base属性的值='/consult/'
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})
// 2. 导出路由实例
export default router
