import axios from 'axios'
import router from '../router'
import { Message, Loading } from 'element-ui'

const tokenName = 'token'
let loading = null

const service = axios.create({
  timeout: 10000,
  baseURL: process.env.BASE_URL
})

service.interceptors.request.use(
  config => {
    loading = Loading.service({
      text: '数据请求中......'
    })
    const token = localStorage.getItem('token')
    if (token) {
      config.headers[tokenName] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (loading) {
      loading.close()
    }
    const status = response.status
    if (status === 200) {
      // 业务逻辑判断
      const code = response.data.code
      const msg = response.data.msg
      // 未登录
      if (code === '0001') {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
        // token 失效
      } else if (code === '0002') {
        Message.error(msg)
        localStorage.removeItem(tokenName)
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
        }, 1000)
      }
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (loading) {
      loading.close()
    }
    if (!error.response) {
      if (error.message.contains('timeout')) {
        Message.error('请求超时，请检查网络连接是否正常！')
      } else {
        Message.error('请求失败，请检查是否断网！')
      }
      return
    }
    const status = error.status
    if (status === 404) {
      Message.error('网络请求不存在')
    } else {
      Message.error(error.response.data.message)
    }
    return Promise.reject(error)
  }
)

export default service
