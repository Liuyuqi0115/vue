<template>
  <div>
    <ul>
      <li v-for="item in listNowPlay" :key="item.id" @click="itemClick(item)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listNowPlay: [
        {
          id: '11',
          title: '悬崖之上1'
        },
        {
          id: '12',
          title: '悬崖之上2'
        },
        {
          id: '13',
          title: '悬崖之上3'
        }
      ]
    }
  },

  methods: {
    itemClick(item) {
      // 路径调转
      // this.$router.push(`/detail/${item.id}`)

      this.$router.push({
        name: 'lyqDetail',
        params: {
          myid: item.id
        }
      })
    }
  }
}
</script>
