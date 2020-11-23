<template>
  <div>
    <h2> {{ product.title }} </h2>
    <b-row>
      <b-col>
        <b-img :src="product.image" class="img-product" />
      </b-col>
      <b-col>
        <h4>Description: </h4>
        <p> {{ product.description }}</p>
        <h4> Price: </h4>
        <p>{{ product.price }}</p>
      </b-col>
    </b-row>
    <p>this is the id {{ product.id }}</p>
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
    },
    image: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style>
  .img-product {
    width: 300px;
  }
</style>
