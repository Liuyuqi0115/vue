<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
    <div class="footer">
      <Navbar></Navbar>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import axios from 'axios'
export default {
  components: {
    Navbar
  },

  mounted() {
    axios.get('http://baidu.com').then((rst) => {
      console.log(rst.data)
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li {
  list-style-type: none;
  text-align: left;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.footer {
  height: 50px;
  vertical-align: middle;
  position: fixed;
  width: 100%;
  bottom: 5px;
  padding: auto;
  background: darkgray;
  text-align: left;
}
</style>
