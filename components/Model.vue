<template>
  <div>
    <nuxt-link to="/category/brand/model/product">
      <b-card img-src="~/assets/model.jpeg" img-alt="Card image" img-top>
        <b-card-text class="brand-name">
          {{ title }}
        </b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Model',
  props: {
    title: {
      type: String,
      require: true,
      default: 'a'
    }
  }
}
</script>
