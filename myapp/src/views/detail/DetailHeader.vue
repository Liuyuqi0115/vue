<template>
  <div>{{ title }}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'header'
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 50px;
  line-height: 50px;
  background: white;
  text-align: center;
}
</style>
