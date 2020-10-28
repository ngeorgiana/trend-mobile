<template>
  <div>
    <p>Instagram feed</p>
    <vue-instagram
      token="myaccesstoken"
      :count="5"
    >
      <template
        slot="feeds"
        slot-scope="props"
      >
        <li class="fancy-list">
          {{ props.feed.link }}
        </li>
      </template>
      <template slot="error" slot-scope="props">
        <div class="fancy-alert">
          {{ props.error.error_message }}
        </div>
      </template>
    </vue-instagram>
  </div>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: 'InstragramComp',
  components: {
    VueInstagram
  },
  props: {
    token: {
      type: String,
      require: true,
      default: 'a'
    },
    count: {
      type: Number,
      require: true,
      default: 5
    }
  }
}
</script>
