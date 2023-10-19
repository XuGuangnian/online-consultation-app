import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// 导入自己练习页面
// import App from './views/data变量定义/ref函数.vue'
// import App from './views/data变量定义/reactive函数.vue'
// import App from './views/组件通信/index.vue'
// import App from './views/事件处理/index.vue'

// 黑马头条案例
import App from './views/黑马头条/index.vue'
// import App from './views/test/index.vue'



// 1. 导入创建pinia的函数
import { createPinia } from 'pinia'

// 2. 创建pinia实例
const pinia = createPinia()


// 3. 注册pinia
// 写法1：链式写法
// createApp(App).use(pinia).mount('#app') 
// 写法2: 普通写法
const app = createApp(App)
app.use(pinia)
app.mount('#app')

