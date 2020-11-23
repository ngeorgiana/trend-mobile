export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  }
}
export const actions = {
  async loadProducts ({ commit }) {
    try {
      const res = await this.$axios.get('https://fakestoreapi.com/products')
      const products = res.data
      commit('SET_PRODUCTS', products)
    } catch (error) {
      console.error('loadProducts went wrong')
    }
  },
  async loadOneProduct ({ commit }, { productId }) {
    try {
      const res = await this.$axios.get(`https://fakestoreapi.com/products/${productId}`)
      const product = res.data
      commit('SET_PRODUCTS', product)
    } catch (error) {
      console.error('loadOneProduct went wrong')
    }
  }
}
