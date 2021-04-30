<template>
  <div>
    <ul>
      <li>
        <router-link to="/film" tag="li" active-class="lyqactive"
          >首页</router-link
        >
      </li>
      <li>
        <router-link to="/cinema" tag="li" active-class="lyqactive"
          >影院</router-link
        >
      </li>
      <li>
        <router-link to="/center" tag="li" active-class="lyqactive"
          >我的</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
    list-style: none;
    list-style-type: none;
    border: 1px red solid;
  }
}
.lyqactive {
  color: greenyellow;
}
</style>
