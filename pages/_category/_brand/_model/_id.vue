<template>
  <div>
    <Product
      :product="product"
    />
  </div>
</template>

<script>
export default {
  async fetch ({ $axios, params, store }) {
    try {
      const res = await $axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
      const product = res.data
      store.commit('SET_CURRENT_PRODUCT', product)
    } catch (error) {
      alert(error)
    }
  },
  computed: {
    product () {
      return this.$store.state.currentProduct
    }
  },
  head () {
    return {
      title: 'produs',
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Produse' },
        { name: 'keywords', content: 'cluj, companie, despre brand' }
      ]
    }
  }
}

</script>
