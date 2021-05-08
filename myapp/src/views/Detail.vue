<template>
  <div v-if="filmInfo" class="detailDiv">
    <div
      :style="{ backgroundImage: 'url(' + filmInfo.poster + ')' }"
      style="height: 200px; background-size: cover; backgroundposition: center"
    ></div>
    <h3 style="margin-bottom: 5px">
      {{ filmInfo.name }}|{{ filmInfo.filmType.name }}
    </h3>
    <div>{{ filmInfo.category }}</div>
    <div>{{ filmInfo.premiereAt | dateFilter }} 上映</div>
    <div>{{ filmInfo.nation }}|{{ filmInfo.runtime }} 分钟</div>
    <div class="synopsis">{{ filmInfo.synopsis }}</div>
    <div style="text-align: center">
      <i class="iconfont icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import httpRequ from '../util/baseHttp'
import moment from 'moment'
Vue.filter('dateFilter', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
export default {
  data() {
    return {
      filmInfo: null
    }
  },
  mounted() {
    httpRequ({
      url: '/gateway?filmId=' + this.$route.params.myid + '&k=7608037',
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
    //  console.log('11', location.hash)
  }
}
</script>
<style lang="scss" scoped>
.detailDiv div {
  text-align: left;
  margin-top: 5px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 5px;
}
.synopsis {
  height: 30px;
  overflow: hidden;
}
</style>
