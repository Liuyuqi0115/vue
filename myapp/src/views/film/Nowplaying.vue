<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad"
    >
      <van-cell
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
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import httpRequ from '@/util/baseHttp'
import Vue from 'vue'
import { List, cell } from 'vant'
import { mapState } from 'vuex'
Vue.use(List).use(cell)
export default {
  mounted() {
    this.requestData((this.currentPage = 1))
  },
  filters: {
    actorsFilter(data) {
      if (data === undefined) return '暂无主演'
      return data.map((item) => item.name).join('>')
    }
  },
  computed: {
    ...mapState('CityModule', ['localCity'])
  },
  data() {
    return {
      listNowPlay: [],
      list: [],
      loading: false,
      finished: false,
      currentPage: 1,
      listNowPlayTotal: 1
    }
  },

  methods: {
    requestData(page) {
      httpRequ({
        url: `gateway?cityId=${this.localCity.cityId}&pageNum=${page}&pageSize=10&type=1&k=8490756`,
        // url: `gateway?cityId=${this.store.state.localCity.cityId}&pageNum=${page}&pageSize=10&type=1&k=8490756`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        },
        method: 'get'
      }).then((res) => {
        this.listNowPlay = [...this.listNowPlay, ...res.data.data.films]
        this.listNowPlayTotal = res.data.data.total
        this.finished = this.listNowPlay.length === this.listNowPlayTotal
        this.loading = false
      })
    },
    onLoad() {
      this.currentPage += 1
      this.requestData(this.currentPage)
    },
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
.van-cell {
  overflow: hidden;
  padding: 10px;
  img {
    float: left;
    width: 100px;
  }
}
</style>
