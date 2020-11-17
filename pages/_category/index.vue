<template>
  <div>
    <nuxt-link :to="`/category/brand`">
      <ListItems
        v-for="product in $store.state.products"
        :key="product.id"
        :title="product.title"
      />
    </nuxt-link>
  </div>
</template>

<script>
import ListItems from '../../components/ListItems'

export default {
  components: {
    ListItems
  },
  async fetch ({ $axios, store }) {
    try {
      const res = await $axios.get('https://jsonplaceholder.typicode.com/todos')
      const products = res.data
      store.commit('SET_PRODUCTS', products)
    } catch (error) {
      alert(error)
    }
  },
  // data () {
  //   return {
  //     products: []
  //   }
  // },
  head () {
    return {
      title: 'Pagina de category',
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Category' },
        { name: 'keywords', content: 'cluj, companie, despre brand' }
      ]
    }
  }
}
</script>
