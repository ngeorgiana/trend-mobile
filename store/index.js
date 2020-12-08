export const state = () => ({
  products: [],
  categories: []
})

export const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  }
}
export const actions = {
  async loadProducts ({ commit }) {
    try {
      const { data: products } = await getData('https://fakestoreapi.com/products', this.$axios)
      // const res = await this.$axios.get('https://fakestoreapi.com/products')
      commit('SET_PRODUCTS', products)
    } catch (error) {
      console.error('loadProducts went wrong')
    }
  },
  async loadOneProduct ({ commit }, { productId }) {
    try {
      const { data: product } = await getData(`https://fakestoreapi.com/products/${productId}`, this.$axios)
      commit('SET_PRODUCTS', product)
    } catch (error) {
      console.error('loadOneProduct went wrong')
    }
  },
  async loadCategories ({ commit }) {
    try {
      const { data: categories } = await getData('https://fakestoreapi.com/products', this.$axios)

      const newArr = deserializeCategories(categories)

      commit('SET_CATEGORIES', newArr)
    } catch (error) {
      console.error('loadCategories went wrong')
    }
  }
  // async loadProductsByCategory ({ commit }, { category }) {
  //   try {
  //     const res = await this.$axios.get(`https://fakestoreapi.com/products/category/${category}`)
  //     const products = res.data
  //     console.log(products)
  //     commit('SET_PRODUCTS', products)
  //   } catch (error) {
  //     console.error('loadProductsByCategory went wrong')
  //   }
  // }
}

const deserializeCategories = function (categories) {
  const seen = new Set()
  const newArr = categories.filter((el) => {
    const duplicate = seen.has(el.category)
    seen.add(el.category)
    return !duplicate
  })
  return newArr
}

const getData = async function (url, axios) {
  const response = await axios.get(url)
  return {
    data: response.data
  }
}
