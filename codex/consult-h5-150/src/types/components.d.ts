/**
 * 为项目全局组件声明类型
 */
import CpNavBar from '@/components/cp-nav-bar.vue'

declare module 'vue' {
  interface GlobalComponents {
    CpNavBar: typeof CpNavBar
  }
}
