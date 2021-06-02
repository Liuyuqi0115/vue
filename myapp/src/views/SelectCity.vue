<template>
  <div>
    <div>
      <div>
        <van-nav-bar
          title="当前城市"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
        >
          <template #left>
            <van-icon name="cross" color="inherit" size="18"
          /></template>

          <template #right> <div></div></template>
        </van-nav-bar>
      </div>
      <div>
        <van-search v-model="searchValue" placeholder="请输入城市或者拼音" />
      </div>
      <div style="height: 100px; background: red"></div>
    </div>
    <div>
      <van-index-bar :index-list="computedlistIndex" @select="handleSelected">
        <div v-for="(item, index) in cityList" :key="index">
          <van-index-anchor :index="item.type" />
          <van-cell
            :title="data.name"
            v-for="data in item.list"
            :key="data.cityId"
            @click="selCityClick(data)"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { IndexAnchor, Toast, IndexBar, NavBar, Search } from 'vant'
import httpRequ from '../util/baseHttp'
import { mapMutations } from 'vuex'
Vue.use(IndexAnchor).use(Toast).use(IndexBar).use(NavBar).use(Search)
export default {
  computed: {
    computedlistIndex() {
      return this.cityList.map((p) => p.type)
    }
  },
  data() {
    return {
      cityList: [],
      searchValue: ''
    }
  },
  mounted() {
    this.getCity()
  },
  methods: {
    ...mapMutations('CityModule', ['changeLocalCity']),
    // 请求数据api
    async requestGetCity() {
      // let resquestCitylist = []
      return httpRequ({
        url: '/gateway?k=7228299',
        headers: {
          'X-Host': 'mall.film-ticket.city.list'
        }
      })
    },
    // 接口返回
    getCity() {
      this.requestGetCity().then((res) => {
        // restCitys=res.data.data.cities
        this.cityList = this.changeCitiesList(res.data.data.cities)
      })
    },
    // 数据回来转换
    changeCitiesList(cities) {
      const restNewCitys = []
      var cityName = []
      for (var i = 65; i <= 90; i++) {
        cityName.push(String.fromCharCode(i))
      }
      cityName.forEach((p) => {
        const lst = cities.filter(
          (city) => city.pinyin.substring(0, 1).toUpperCase() === p
        )

        if (lst.length > 0) {
          restNewCitys.push({
            type: p,
            list: lst
          })
        }
      })
      return restNewCitys
    },
    // 点击事件
    selCityClick(data) {
      // Toast(data.name)
      // this.$store.state.city = data
      //  this.$store.commit('changeLocalCity', data)
      this.changeLocalCity(data)
      // console.log(data)
      this.$router.back()
      // console.log(data.name)
    },
    handleSelected(data) {
      Toast(data)
      // this.$router.back()
    },
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.van-toast--html,
.van-toast--text {
  min-width: 10px;
  width: auto;
}
</style>
