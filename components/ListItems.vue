<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card img-src="apple.png" img-alt="Card image" img-top>
            <b-card-text class="brand-name">
              {{ title }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ListItems',
  props: {
    title: {
      type: String,
      require: true,
      default: 'a'
    },
    id: {
      type: Number,
      default: 1
    }
  }
}
</script>
