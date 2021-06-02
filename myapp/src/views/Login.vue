<template>
  <div>
    <div>姓名:<input type="text" v-bind="userName" /></div>
    <div>密码:<input type="text" v-bind="userPassword" /></div>
    <button @click="onSubmit">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      userPassword: ''
    }
  },
  methods: {
    onSubmit() {
      localStorage.setItem('token', 'userName')
      console.log(11111)
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
