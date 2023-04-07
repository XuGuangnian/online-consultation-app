// 1. 导入创建根实例函数（工厂函数）
import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// 导入练习的页面
// import App from './views/vue2vs3/index.vue'
// import App from './views/setup函数/index.vue'
// import App from './views/data变量定义/reactive函数.vue'
// import App from './views/data变量定义/ref函数.vue'
// import App from './views/data变量处理/computed函数.vue'
// import App from './views/data变量处理/watch函数.vue'
// import App from './views/生命周期/index.vue'
// import App from './views/模版ref/index.vue'
// import App from './views/案例/index.vue'
import App from './views/组件通信/index.vue'


// 引入饿了吗组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'











// 2. 创建根实例，挂载显示根组件
// 注册组件库
createApp(App).use(ElementPlus).mount('#app')
