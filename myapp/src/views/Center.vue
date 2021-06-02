<template>
  <div><van-button type="primary">主要按钮</van-button></div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  mounted() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login')
    }
  }
}
</script>
