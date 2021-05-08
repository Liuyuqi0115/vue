<template>
  <ul>
    <router-link tag="li" to="/film/nowplaying" active-class="lyqactive"
      >正在热映</router-link
    >

    <router-link tag="li" to="/film/comingSoon" active-class="lyqactive"
      >即将上映</router-link
    >
  </ul>
</template>
<script>
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding-left: 0px;
  li {
    flex: 1;
    text-align: center;
    line-height: 40px;
    border-bottom: 1px solid;
  }
}
.lyqactive {
  color: greenyellow;
}
</style>
