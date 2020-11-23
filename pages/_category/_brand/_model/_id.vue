<template>
  <div>
    <Product
      :product="products"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from '../../../../components/Product'

export default {
  components: {
    Product
  },
  async fetch ({ store, params }) {
    await store.dispatch('loadOneProduct', { productId: params.id })
  },
  computed: {
    ...mapState(['products']),
    product () {
      return this.products.find(i => i.id === this.$route.params.id)
    }
  },
  head () {
    return {
      title: '',
      titleTemplate: `${this.products.title} - Produs`,
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Produse' },
        { name: 'keywords', content: 'cluj, companie, despre brand' }
      ]
    }
  }
}

</script>
