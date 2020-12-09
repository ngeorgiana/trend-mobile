<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  middleware: 'load-products-and-categories'
}
</script>
