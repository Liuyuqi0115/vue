<template>
  <div v-if="filmInfo" class="detailDiv">
    <detail-header v-top :title="filmInfo.name"></detail-header>
    <div
      :style="{ backgroundImage: 'url(' + filmInfo.poster + ')' }"
      style="height: 200px; background-size: cover; backgroundposition: center"
    >
      <div @click="clickBack" class="divBack">
        <van-icon name="arrow-left" size="20" style="width: 50px" />
      </div>
    </div>
    <h3 style="margin-bottom: 5px">
      {{ filmInfo.name }}|{{ filmInfo.filmType.name }}
    </h3>
    <div>{{ filmInfo.category }}</div>
    <div>{{ filmInfo.premiereAt | dateFilter }} 上映</div>
    <div>{{ filmInfo.nation }}|{{ filmInfo.runtime }} 分钟</div>
    <div :class="isShow ? '' : 'synopsis'">{{ filmInfo.synopsis }}</div>
    <div style="text-align: center" @click="isShow = !isShow">
      <i
        class="iconfont icon-arrow-down"
        :class="isShow ? 'icon-arrow-up-bold' : 'icon-arrow-down'"
      ></i>
    </div>
    <div>
      <h3>演职人员</h3>
    </div>
    <detail-swiper :perslide="3" swiperclass="actors">
      <div
        class="swiper-slide"
        v-for="(data, index) in filmInfo.actors"
        :key="index"
      >
        <!-- <img :src="data.avatarAddress" /> -->
        <div
          :style="{ backgroundImage: 'url(' + data.avatarAddress + ')' }"
          style="
            height: 200px;
            background-size: cover;
            background-position: center;
          "
        />
        <div style="text-align: center">
          <div>{{ data.name }}</div>
          <div>{{ data.role }}</div>
        </div>
      </div>
    </detail-swiper>
    <div>
      <h3>剧照</h3>
    </div>
    <detail-swiper :perslide="2" swiperclass="swiperphotos">
      <div
        class="swiper-slide"
        v-for="(data, index) in filmInfo.photos"
        :key="index"
      >
        <!-- <img :src="data" /> -->
        <div
          @click="imageClick(index)"
          :style="{ backgroundImage: 'url(' + data + ')' }"
          style="
            height: 200px;
            background-size: cover;
            background-position: center;
          "
        />
      </div>
    </detail-swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import httpRequ from '../util/baseHttp'
import moment from 'moment'
import detailSwiper from './detail/DetaiSwiper'
import detailHeader from './detail/DetailHeader'
import { ImagePreview, NavBar, Icon } from 'vant'
import { mapMutations } from 'vuex'
// 全局注册
Vue.use(ImagePreview).use(NavBar).use(Icon)
Vue.filter('dateFilter', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})

Vue.directive('top', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted(el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if (
        (document.body.scrollTop || document.documentElement.scrollTop) > 50
      ) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind() {
    window.onscroll = null
  }
})

export default {
  components: {
    detailSwiper,
    detailHeader
  },
  data() {
    return {
      filmInfo: null,
      isShow: false
    }
  },
  methods: {
    ...mapMutations('TabberModule', ['changeTabbarShow']),
    clickBack() {
      this.$router.back()
    },
    imageClick(index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true,
        loop: false,
        closeIconPosition: 'top-left'
      })
    }
  },
  mounted() {
    this.changeTabbarShow(false)

    httpRequ({
      url: '/gateway?filmId=' + this.$route.params.myid + '&k=7608037',
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      // console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
  },
  beforeDestroy() {
    this.changeTabbarShow(true)
    // this.$store.commit('changeTabbarShow', true)
  }
}
</script>
<style lang="scss" scoped>
.detailDiv div {
  text-align: left;
  margin-top: 0px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 15px;
  .divBack {
    position: relative;
    margin-left: 10px;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    opacity: 0.6;
    border-radius: 20px;
    background: darkgray;
    border: 2px solid darkgrey;
  }
}

.synopsis {
  height: 40px;
  overflow: hidden;
}
</style>
