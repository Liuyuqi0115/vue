import httpRequ from '@/util/baseHttp'
const module = {
  namespaced: true,
  state: {
    cinameList: []
  },
  mutations: {
    setCinameList (state, data) {
      state.cinameList = data
    }
  },
  actions: {
    getCinameList (store, cityId) {
      return httpRequ({
        url: '/gateway?cityId=' + cityId + '&ticketFlag=1&k=9973404',
        headers: {
          'X-Host': ' mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('setCinameList', res.data.data.cinemas)
        // this.cinemaList = res.data.data.cinemas
      })
    }
  }
}
export default module
