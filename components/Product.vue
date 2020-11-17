<template>
  <div>
    <p>This is the product page {{ product }} </p>
    <p>this is the id {{ product.id }}</p>
    <p>this is the title {{ product.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    },
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
