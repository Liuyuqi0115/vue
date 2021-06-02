<template>
  <div>
    <div>
      <van-nav-bar title="标题" left-arrow @click-right="searchClick">
        <template #left>
          <div @click="cityHandleClick">
            <span>{{ localCity.name }}</span
            ><van-icon
              style="margin-left: 5px; vertical-align: middle"
              name="arrow-down"
              size="14"
            />
          </div>
        </template>

        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="betterParent" :style="{ height: height }">
      <ul class="cinemaUl">
        <li class="listli" v-for="data in cinameList" :key="data.cinemaId">
          <div>{{ data.name }}</div>
          <div
            style="
              font-size: 12px;
              color: gray;
              margin-top: 2px;
              margin-bottom: 2px;
            "
          >
            {{ data.address }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import httpRequ from '../util/baseHttp'
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'
import { mapActions, mapMutations, mapState } from 'vuex'

Vue.use(NavBar).use(Icon)
export default {
  data() {
    return {
      cinemaList: [],
      height: 0
    }
  },
  computed: {
    ...mapState('CinameModule', ['cinameList']),
    ...mapState('CityModule', ['localCity'])
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    if (this.cinameList.length === 0) {
      this.getCinameList(this.localCity.cityId).then((res) => {
        // this.$nextTick(() => {
        // console.log(22222222222222)
        /* eslint-disable no-new */
        new BetterScroll('.betterParent', {
          scrollbar: {
            fade: true
          }
        })
        // })
      })
    } else {
      //  console.log(1111111111)
      /* eslint-disable no-new */
      new BetterScroll('.betterParent', {
        scrollbar: {
          fade: true
        }
      })
    }

    // if (this.cinameList.length === 0) {
    //   this.$store.dispatch('getCinameList').then((res) => {
    //     this.$nextTick(() => {
    //       /* eslint-disable no-new */
    //       new BetterScroll('.betterParent', {
    //         scrollbar: {
    //           fade: true
    //         }
    //       })
    //     })
    //   })
    // } else {
    //   this.$nextTick(() => {
    //     /* eslint-disable no-new */
    //     new BetterScroll('.betterParent', {
    //       scrollbar: {
    //         fade: true
    //       }
    //     })
    //   })
    // }
    // httpRequ({
    //   url:
    //     '/gateway?cityId=' +
    //     this.$store.state.localCity.cityId +
    //     '&ticketFlag=1&k=9973404',
    //   headers: {
    //     'X-Host': ' mall.film-ticket.cinema.list'
    //   }
    // }).then((res) => {
    //   console.log(res.data)
    //   this.cinemaList = res.data.data.cinemas

    // })
  },
  methods: {
    ...mapMutations('CinameModule', ['setCinameList']),
    ...mapActions('CinameModule', ['getCinameList']),
    cityHandleClick() {
      this.setCinameList([])
      // this.$store.commit('setCinameList', [])
      this.$router.push({
        path: '/city'
      })
    },
    searchClick() {
      this.$router.push({
        path: '/cinema/search'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.betterParent {
  overflow: hidden;
  position: relative;
}
.cinemaUl {
  padding-inline-start: 5px;
}
</style>
