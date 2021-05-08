<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>

    <Navbar></Navbar>
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
    axios
      .get(
        '/ajax/movieOnInfoList?token=&optimus_uuid=5A1FA230A98111EBBCAA6146CD132B4320EC1D7F37FE436CBFD4CC388A532BC0&optimus_risk_level=71&optimus_code=10'
      )
      .then((rst) => {
        console.log(rst.data, '11111111')
      })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
</style>
