module.exports = {
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })

    config.externals = {
      vue: 'Vue',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios'
    }
    const cdn = {
      css: [
        '//unpkg.com/element-ui/lib/theme-chalk/index.css'
      ],
      js: [
        '//cdn.staticfile.org/vue/2.6.10/vue.min.js',
        // vue-router
        '//cdn.staticfile.org/vue-router/3.1.3/vue-router.min.js',
        // vuex
        '//cdn.staticfile.org/vuex/3.1.2/vuex.min.js',
        // axios
        '//cdn.staticfile.org/axios/0.19.0/axios.min.js',
        // element-ui js
        '//unpkg.com/element-ui/lib/index.js'
      ]
    }
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
  }
}
