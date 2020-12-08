<template>
  <div>
    <ListItems
      v-for="categorie in categories"
      :key="categorie.id"
      :image="categorie.image"
      :title="categorie.category"
    />
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
    await store.dispatch('loadCategories')
  },
  computed: {
    ...mapState(['categories'])
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
