<template>
  <div>我的</div>
</template>

<script>
export default {
  mounted() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login')
    }
  }
}
</script>
