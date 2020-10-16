import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: false,
    isUserMenuVisible: false,
    isLogged: false
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuVisible = !state.isMenuVisible
    },
    toggleUserMenu(state) {
      state.isUserMenuVisible = !state.isUserMenuVisible
    },
    setIsLogged(state, value) {
      state.isLogged = value
    }
  },
  actions: {

  }
})
