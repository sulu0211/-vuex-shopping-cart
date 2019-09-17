/**
 购物车数据列表容器

 */
const state = {
  message: 'cart message',
  cartProducts: [
    // { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, isChecked: false, count: 1 }
    // { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, isChecked: false, count: 2 },
    // { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, isChecked: false, count: 3 }
  ]
}
const getters = {
  // 获取加入购物车件数
  allCartProductsCount (state) {
    let count = 0
    state.cartProducts.forEach(item => {
      count += item.count
    })
    return count
  },
  // 获取加入购物车总价
  allCartProductsPrice (state) {
    let price = 0
    state.cartProducts.forEach(item => {
      price += (item.count * item.price)
    })
    return price
  }

}
const mutations = {
  // 删除商品
  deleteProduct (state, product) {
    const index = state.cartProducts.findIndex(item => item.id === product.id)
    index !== 1 && state.cartProducts.splice(index, 1)
  },
  // 添加商品
  addToCart (state, product) {
    // find 会遍历数组，找到符合 item.id === product.id 条件的元素并返回
    const prod = state.cartProducts.find(function (item, index) {
      return item.id === product.id
    })
    // 如果该商品已存在，则让购物车中的数量+1，
    if (prod) {
      prod.count++
    } else {
      // 如果不存在则新增一个商品到购物车列表
      state.cartProducts.push({
        ...product,
        isChecked: true,
        count: 1
      })
    }
    // console.log(product)
  },
  /**
   * 更新商品的选中状态
   * 注意：mutation 只能接受一个参数
   *
   */
  updateProductChecked (state, payload) {
    // console.log(payload)
    payload.product.isChecked = payload.checked
  }
}
const actions = {}

export default {
  namespaced: true, // 命名空间
  state,
  getters,
  mutations,
  actions
}
