import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
const components = require.context('./global', true, /\.js$/)

components.keys().forEach(component => {
  const config = components(component)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const item = components.default || config
  Vue.component(item.name, item)
})
