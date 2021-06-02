<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
    <Navbar v-show="isTabberShow"></Navbar>
    <!-- <Navbar v-show="$store.state.isTabberShow"></Navbar> -->
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState('TabberModule', ['isTabberShow'])
  },
  mounted() {}
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
