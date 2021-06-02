import Vue from 'vue'
import Vuex from 'vuex'
// import httpRequ from '../util/baseHttp'
import CinameModule from './module/CinameModule'
import CityModule from './module/CityModule'
import TabberModule from './module/TabberModule'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    // localCity: {
    //   name: '上海',
    //   cityId: '310100',
    //   pinyin: 'shanghai',
    //   isHot: '1'
    // },
    // isTabberShow: true,
    // cinameList: []
  },
  mutations: {
    // changeLocalCity (state, city) {
    //   state.localCity = city
    // },
    // changeTabbarShow (state, data) {
    //   state.isTabberShow = data
    // },
    // setCinameList (state, data) {
    //   state.cinameList = data
    // }
  },
  // 异步存储
  actions: {
    // getCinameList (store) {
    //   return httpRequ({
    //     url:
    //       '/gateway?cityId=' +
    //       store.state.localCity.cityId +
    //       '&ticketFlag=1&k=9973404',
    //     headers: {
    //       'X-Host': ' mall.film-ticket.cinema.list'
    //     }
    //   }).then(res => {
    //     console.log('store', res.data)
    //     store.commit('setCinameList', res.data.data.cinemas)
    //     // this.cinemaList = res.data.data.cinemas
    //   })
    // }
  },
  modules: {
    CinameModule,
    CityModule,
    TabberModule
  }
})
