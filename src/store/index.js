import { createStore } from 'vuex'
export default createStore({
  state: {
    flexsaleHostname: 'https://app.flexsale.store',
    hostname: 'https://flexsale.store',
    // apiHostname: 'http://localhost:8000',
    apiHostname: 'https://api.flexsale.store',
    mobile: false,
    tablet: false,
    desktop: false,
    windowHeight: '',
    windowWidth: '',
    dynamicFloatingDiv: { left: 0, top: 0, bottom: 0},
    mailing: false,
    loader: false
  },
  mutations: {
    computeWindow(state) {
      let appWidth = 990
      let winWidth = window.innerWidth
      state.windowHeight = window.innerHeight
      state.windowWidth = winWidth
      if(winWidth <= 500){
        this.commit('setMobile')
      }else if(winWidth > appWidth){
        this.commit('setDesktop')
      }else{
        this.commit('setTablet')
      }
    },

    setMobile(state) {
      this.commit('resetAll')
      state.mobile = true
    },
    setTablet(state) {
      this.commit('resetAll')
      state.tablet = true
    },
    setDesktop(state) {
      this.commit('resetAll')
      state.desktop = true
    },
    resetAll(state) {
      state.tablet = false
      state.mobile = false
      state.desktop = false
    },
    setDynamicFloatingDiv(state, payload) {
      const rect = payload.getBoundingClientRect()
      let top = rect.top
      let left = rect.left
      let bottom = rect.bottom
      state.dynamicFloatingDiv.left = left
      state.dynamicFloatingDiv.top = top
      state.dynamicFloatingDiv.bottom = bottom
      document.body.classList.add('fixed-body')
    },
    reSetDynamicFloatingDiv(state) {
      state.dynamicFloatingDiv.left = 0
      state.dynamicFloatingDiv.top = 0
      state.dynamicFloatingDiv.bottom = 0
      document.body.classList.remove('fixed-body')
    },
    makeMail(state) {
      state.mailing = !state.mailing
    },
    spinLoader(state) {
      state.loader = true
    },
    stopLoader(state) {
      state.loader = false
    }
  },
  actions: {
    
  },
  getters: {
    getHostname: (state) => state.hostname,
    getAPIHost: (state) => state.apiHostname,
    getWindowHeight: (state) => state.windowHeight,
    getWindowWidth: (state) => state.windowWidth,
    getMobile: (state) => state.mobile,
    getTablet: (state) => state.tablet,
    getDesktop: (state) => state.desktop,
    getCookieConsent: (state) => state.cookieConsent,
    getAppHostname: (state) => state.flexsaleHostname,
    getFloatingDiv: (state) => state.dynamicFloatingDiv,
    getMailing: (state) => state.mailing,
    getLoader: (state) => state.loader
  }
})
