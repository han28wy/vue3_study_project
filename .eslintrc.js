// .eslintrc.js

// eslint-define-config可以帮助我们做语法提示
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  // ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
  env: {
    browser: true,
    es2021: true
  },
  // 启用的规则
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    // js的版本
    ecmaVersion: 13,
    // 解析器
    parser: '@typescript-eslint/parser',
    // 模块化方案
    sourceType: 'module'
  },
  // 引用的插件  下载的插件去掉eslint-plugin-前缀引入
  plugins: ['vue', '@typescript-eslint', 'import', 'node', 'promise'],
  // 自定义规则
  rules: {
    // 去掉为定义变量检查（为了修复 .d.ts全局声明报错，auto-imports.d.ts全局导入报错）
    "no-undef": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "vue/no-v-model-argument": "off",
    "vue/multi-word-component-names": ["off", {
      "ignores": []
    }]
  }
})
