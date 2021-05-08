<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="lyqactive"
        >电影</router-link
      >

      <router-link to="/cinema" tag="li" active-class="lyqactive"
        >影院</router-link
      >

      <router-link to="/center" tag="li" active-class="lyqactive"
        >我的</router-link
      >
    </ul>
  </nav>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  padding: 0px;
  ul {
    display: flex;
    background: darkgray;
    padding: 0px;
    padding-left: 0px;
    height: 50px;
    line-height: 50px;
    margin-left: 0px;
    li {
      text-align: center;
      height: 50px;
      line-height: 50px;
      flex: 1;
      vertical-align: middle;
      padding-bottom: 30px;
    }
  }
}

.lyqactive {
  color: greenyellow;
}
</style>
