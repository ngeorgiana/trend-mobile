<template>
  <Product />
</template>

<script>
import Product from '../../../../../components/Product'
export default {
  components: {
    Product
  },
  head () {
    return {
      title: 'Pagina de produse',
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Produse' },
        { name: 'keywords', content: 'cluj, companie, despre brand' }
      ]
    }
  }
}
</script>
