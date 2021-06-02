const module = {
  namespaced: true,
  state: {
    localCity: {
      name: '',
      cityId: '',
      pinyin: '',
      isHot: ''
    }
  },
  mutations: {
    changeLocalCity (state, city) {
      state.localCity = city
    }
  },
  actions: {}
}
export default module
