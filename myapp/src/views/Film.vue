<template>
  <div>
    <div class="divswiper">大轮播</div>
    <ul class="ulstyle">
      <li>
        <router-link tag="li" to="/film/nowplaying" active-class="lyqactive"
          >正在热映</router-link
        >
      </li>
      <li>
        <router-link tag="li" to="/film/comingSoon" active-class="lyqactive"
          >即将上映</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss"  scoped >
.divswiper {
  width: 100%;
  height: 200px;
  background: red;
}
ul {
  display: flex;
  vertical-align: middle;
  background: darkgray;
  height: 50px;
  li {
    flex: 1;
    vertical-align: middle;
    text-align: center;
    line-height: 50px;
    list-style-type: none;
  }
}
.lyqactive {
  color: greenyellow;
}
</style>
