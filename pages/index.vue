<template>
  <div>
    <Banner />
    <Category />
  </div>
</template>

<script>
export default {
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
