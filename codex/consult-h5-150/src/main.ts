import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 1. 创建vue根实例
const app = createApp(App)

// 2. 注册pinia和router
app.use(createPinia())
app.use(router)
// 3. 挂载渲染App根组件
app.mount('#app')
