<template>
  <div>
    <div>
      <b-img src="~/static/brand-image2.jpg" fluid alt="Responsive image" />
      <span class="d-flex justify-content-center banner">
        TRANSPORT GRATUIT LA COMENZI MAI MARI DE 50 LEI
      </span>
    </div>
    <ListItem />
    <ListItem />
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
