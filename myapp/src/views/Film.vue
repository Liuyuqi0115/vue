<template>
  <div>
    <film-swiper class="divswiper">
      <div class="swiper-slide" v-for="(data, index) in filmImg" :key="index">
        <div
          :style="{ backgroundImage: 'url(' + data + ')' }"
          style="height: 200px; background-size: cover"
        />
      </div>
    </film-swiper>
    <filmHeader
      style="position: sticky; top: 0px; backround: write; z-index: 99"
    ></filmHeader>

    <router-view></router-view>
  </div>
</template>
<script>
import filmHeader from '../views/film/FilmHeader'
import filmSwiper from '../views/film/filmSwiper'
export default {
  components: {
    filmHeader,
    filmSwiper
  },
  data() {
    return {
      filmImg: [
        'https://pic.maizuo.com/usr/movie/2dc58177bcbcc47e58cd37bdb101f14d.jpg',
        'https://pic.maizuo.com/usr/movie/d629445d0c3e7b32e76192e711ccb965.jpg',
        'https://pic.maizuo.com/usr/movie/e78e43fa9a9f76ad85d282f71b87e713.jpg'
      ]
    }
  }

  // mounted() {
  //   axios({
  //     url:
  //       'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8490756',
  //     headers: {
  //       'X-Client-Info':
  //         '{"a":"3000","ch":"1002","v":"5.0.4","e":"16197048775574974924390401","bc":"310100"}',
  //       'X-Host': 'mall.film-ticket.film.list'
  //     },
  //     method: 'get'
  //   }).then((res) => {
  //     console.log(res.data)
  //   })
  // }
}
</script>

<style lang="scss"  scoped >
.divswiper {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
  }
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
</style>
