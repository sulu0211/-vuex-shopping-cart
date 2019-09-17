
import axios from 'axios'
/**
 商品列表容器

 */
const state = {
  message: 'produts message',
  allProducts: [
    // { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01 },
    // { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99 },
    // { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99 }
  ] // 存储所有的商品列表

}
const getters = {}
const mutations = {
  // 4-5.在mutation修改state ，5.数据改变，更新视图
  setAllProducts (state, data) {
    state.allProducts = data
  }
}
const actions = {
  // 2.在action中执行异步操作
  async getAllProducts (context) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
    // console.log(data)
    // 3.异步操作执行结束，提交mutation
    context.commit('setAllProducts', data)
  }
}

export default {
  namespaced: true, // 命名空间
  state,
  getters,
  mutations,
  actions
}
