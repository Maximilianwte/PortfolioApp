import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: "theme_dark",
    fetch_images: false,
    auth: false,
    images: []
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme == "theme_light" ? "theme_dark" : "theme_light"
    },
    setFetchImages(state, payload) {
      state.fetch_images = payload
    },
    getImages(state, payload) {
      state.images.push(payload)
    },
    setAuth(state, payload) {
      state.auth = payload
      console.log(state.auth)
    }
  },
  actions: {

  },
  getters: {
    getImage: (state) => (id) => {
      return state.images.find(image => image.Id === id)
  }
  }
})
