<template>
  <div>
    <nuxt-link to="">
      <b-card img-src="~/assets/category.jpg" img-alt="Card image" img-top>
        <b-card-text class="category-name">
          {{ title }}
        </b-card-text>
        <b-bttn>
          Adauga in cos
        </b-bttn>
      </b-card>
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    title: {
      type: String,
      require: true,
      default: 'a'
    }
  }
}
</script>
