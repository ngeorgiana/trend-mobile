<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <nuxt-link :to="`/category/brand/model/${id}`">
            <b-card :img-src="image" img-alt="Card image" img-top>
              <b-card-text class="brand-name">
                {{ title }}
                {{ id }}
              </b-card-text>
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
      require: true,
      default: 'a'
    },
    id: {
      type: Number,
      default: 1,
      require: true
    },
    image: {
      type: String,
      require: true,
      default: 'a'
    }
  }
}
</script>
