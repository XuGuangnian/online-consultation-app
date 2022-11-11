import { useUserStore } from '@/stores'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// import Test from '@/views/test/index.vue'
const Test = () => import('@/views/test/index.vue')

// 路由配置数组
const routes = [
  // 一级路由=》挂载点router-view放到App.vue根组件
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  // 测试页面
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  // tabBar页面
  {
    // 父路由：layout公共布局页面
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      // 二级路由：挂载点router-view放到父路由指定位置
      // 子路由：首页、健康百科、消息中心、我的
      { path: '/home', component: () => import('@/views/home/index.vue') },
      { path: '/article', component: () => import('@/views/article/index.vue') },
      { path: '/notify', component: () => import('@/views/notify/index.vue') },
      { path: '/user', component: () => import('@/views/user/index.vue') }
    ]
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

// 页面访问拦截：前置路由守卫
/**
 * vue2: to 去哪 from 从哪来 next:Function 放行
 * 说明：vue2需要通过next函数放行
 * vue3: to 去哪 from 从哪来
 */
router.beforeEach((to) => {
  /**
   * 页面访问拦截:
   * 根据是否有token，决定用户是否可以访问to页面
   * 1. 有token同时排除=》登录、注册等=》正常访问=》什么也不需要做
   * 2. 没有token =》跳回登录页 =》 return 'path地址'
   */
  const store = useUserStore()
  // 说明：['/login', '/other']不需要登录就可以访问=》vip用户
  // 如果没有token，同时不在vip里边=》重新登录
  if (!store.user.token && !['/login', '/other'].includes(to.path)) return '/login'
})

// 2. 导出路由实例
export default router
