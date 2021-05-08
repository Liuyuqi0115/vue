<template>
  <div>
    <ul>
      <li
        v-for="item in listNowPlay"
        :key="item.filmId"
        @click="itemClick(item)"
      >
        <div>
          <img :src="item.poster" />
          <h4>{{ item.name }}</h4>
          <p>观众评分:{{ item.grade }}</p>
          <p style="white-space: nowrap; width: 100%">
            主演: {{ item.actors | actorsFilter }}
          </p>
          <p>{{ item.nation }}|{{ item.runtime }} 分钟</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import httpRequ from '@/util/baseHttp'
export default {
  mounted() {
    httpRequ({
      url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8490756',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      this.listNowPlay = res.data.data.films
    })
  },
  filters: {
    actorsFilter(data) {
      if (data === undefined) return '暂无主演'
      return data.map((item) => item.name).join('>')
    }
  },
  data() {
    return {
      listNowPlay: []
    }
  },

  methods: {
    itemClick(item) {
      // 路径调转
      // this.$router.push(`/detail/${item.id}`)

      this.$router.push({
        name: 'lyqDetail',
        params: {
          myid: item.filmId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  overflow: hidden;
  padding: 10px;
  img {
    float: left;
    width: 100px;
  }
}
</style>
