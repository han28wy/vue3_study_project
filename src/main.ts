import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router'
import { setGlobalOptions } from 'vue-request'
import './tailwind.css'
import request from '@/request/axios'

const app = createApp(App)
app.use(router).use(ElementPlus)
app.config.globalProperties.$msg = 'hello'
app.config.globalProperties.$request = request
app.mount('#app')
// vue-request 全局配置
setGlobalOptions({
    manual: true, // 手动触发run，runAsync发起请求
  })