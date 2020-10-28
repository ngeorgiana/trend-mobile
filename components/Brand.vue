<template>
  <div>
    <nuxt-link to="">
      <b-card img-src="~/assets/apple.png" img-alt="Card image" img-top>
        <b-card-text class="brand-name">
          {{ title }}
        </b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  props: {
    title: {
      type: String,
      require: true,
      default: 'a'
    }
  }
}
</script>
