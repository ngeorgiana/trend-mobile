<template>
  <div>
    <nuxt-link :to="`/category/brand`">
      <ListItems
        v-for="product in products"
        :key="product.id"
        :title="product.title"
      />
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListItems from '../../components/ListItems'

export default {
  components: {
    ListItems
  },
  async fetch ({ store }) {
    await store.dispatch('loadProducts')
  },
  computed: {
    ...mapState(['products'])
  },
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
