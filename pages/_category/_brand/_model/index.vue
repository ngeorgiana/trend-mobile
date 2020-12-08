<template>
  <div>
    <ListItem
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :title="product.title"
      :image="product.image"
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
  async fetch ({ store }) {
    await store.dispatch('loadProducts')
  },
  computed: {
    ...mapState(['products'])
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
