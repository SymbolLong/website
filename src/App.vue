<template>
  <el-container direction="vertical">
    <Header/>
    <Main/>
    <Footer/>
  </el-container>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    Footer,
    Header,
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  overflow: auto!important;
}
</style>
