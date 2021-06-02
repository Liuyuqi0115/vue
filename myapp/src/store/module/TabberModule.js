const module = {
  namespaced: true,
  state: {
    isTabberShow: true
  },
  mutations: {
    changeTabbarShow (state, data) {
      state.isTabberShow = data
    }
  },
  actions: {}
}
export default module
