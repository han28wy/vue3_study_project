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
    dts: 'src/type/components.d.ts',
  })],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, "src")
    }
  },
})
