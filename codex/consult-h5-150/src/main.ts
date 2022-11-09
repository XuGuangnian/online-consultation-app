import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/stores'

// 导入全局样式
import '@/styles/index.css'

// vant需要单独引入的样式
import 'vant/es/toast/style'

// 1. 创建vue根实例
const app = createApp(App)

// 2. 注册pinia和router
app.use(pinia)
app.use(router)
// 3. 挂载渲染App根组件
app.mount('#app')
