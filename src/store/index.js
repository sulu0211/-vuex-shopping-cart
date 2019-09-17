import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart' // 引入模块
import products from './modules/products' // 引入模块

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    products
  }
})
