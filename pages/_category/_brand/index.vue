<template>
  <div>
    <nuxt-link :to="`/category/brand/model`">
      <ListItems
        v-for="product in $store.state.products"
        :key="product.id"
        :title="product.title"
      />
    </nuxt-link>
  </div>
</template>

<script>
import ListItems from '../../../components/ListItems'

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
  //     alldatas: []
  //   }
  // },
  // async created () {
  //   try {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/todos')

  //     this.alldatas = res.data
  //     // console.log(res.data)
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.error('Eroare')
  //   }
  // },
  // data () {
  //   return {
  //     alldatas: []
  //   }
  // },
  head () {
    return {
      title: 'Pagina de branduri ale produselor',
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Branduri' },
        { name: 'keywords', content: 'cluj, companie, despre brand' }
      ]
    }
  }
}
</script>
