export const state = () => ({
  products: [],
  currentProduct: {}
})

export const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  }
}
