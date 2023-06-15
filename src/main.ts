import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router'
import { setGlobalOptions } from 'vue-request'

createApp(App).use(router).use(ElementPlus).mount('#app')

// vue-request 全局配置
setGlobalOptions({
    manual: true, // 手动触发run，runAsync发起请求
  })