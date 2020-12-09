<template>
  <div>
    <nuxt-link :to="`/category/brand/model`">
      <ListItems
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :image="product.image"
      />
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListItems from '../../../components/ListItems'

export default {
  components: {
    ListItems
  },
  computed: {
    ...mapState(['products'])
  },
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
