import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
    imports:["vue","vue-router"],
    dts: 'src/auto-import.d.ts'
  }),
  Components({
    resolvers: [ElementPlusResolver()],
    dirs: ['src/components'],
    dts: 'src/type/components.d.ts',
  })],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, "src")
    }
  },
  css:{
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server:{
    proxy:{
      '/m1':{
        target:'http://127.0.0.1:4523',
        changeOrigin:true,
      }
    }
  },
  build:{}
})
