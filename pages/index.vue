<template>
  <div>
    <div>
      <b-img src="~/static/brand-image2.jpg" alt="Responsive image" fluid />
      <span class="d-flex justify-content-center banner">
        TRANSPORT GRATUIT LA COMENZI MAI MARI DE 50 LEI
      </span>
    </div>
    <b-container v-for="product in products" :key="product.id">
      <b-row>
        <b-col>
          <b-card :img-src="product.image" img-alt="Card image" img-top class="category-card">
            <b-card-text class="brand-name">
              {{ product.category }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch ({ store }) {
    await store.dispatch('loadProducts')
  },
  computed: {
    ...mapState(['products'])
  },
  head () {
    return {
      title: 'Pagina de index',
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Descriere' },
        { name: 'keywords', content: 'cluj, companie, index' }
      ]
    }
  }
}
</script>

<style>
  .category-card {
    width: 250px;
    margin: 10px auto;
  }
</style>
