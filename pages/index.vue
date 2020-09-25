<template>
  <div>
    <b-img src="~/assets/brand-image2.jpg" fluid alt="Responsive image" />
    <span class="d-flex justify-content-center banner">
      TRANSPORT GRATUIT LA COMENZI MAI MARI DE 50 LEI
    </span>
    <b-card img-src="~/assets/category.jpg" img-alt="Card image" img-top>
      <b-card-text>
        Apple
      </b-card-text>
    </b-card>
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
