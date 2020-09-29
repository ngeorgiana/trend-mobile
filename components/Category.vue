<template>
  <div>
    <b-card img-src="~/assets/category.jpg" img-alt="Card image" img-top>
      <b-card-text class="category-name">
        {{ title }}
      </b-card-text>
    </b-card>
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
