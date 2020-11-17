<template>
  <div>
    <ListItem
      v-for="product in product"
      :id="product.id"
      :key="product.id"
      :title="product.title"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListItem from '../../../../components/ListItem'

export default {
  components: {
    ListItem
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
  computed: {
    ...mapState({
      product: 'products'
    })
  },
  head () {
    return {
      title: 'Pagina de modele',
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Modele' },
        { name: 'keywords', content: 'cluj, companie, despre brand' }
      ]
    }
  }
}
</script>
