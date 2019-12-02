import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
const array = require.context('./', true, /index\.js$/)
array.keys().forEach(router => {
  //  如果是根目录index.js 不处理
  if (router.startsWith('./index')) {
    return
  }
  const item = array(router)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = [...routes, ...(item.default || item)]
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
