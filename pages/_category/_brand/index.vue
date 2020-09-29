<template>
  <div>
    <Brand
      v-for="alldata in alldatas"
      :key="alldata.id"
      :title="alldata.title"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Brand from '../../../components/Brand'

export default {
  components: {
    Brand
  },
  data () {
    return {
      alldatas: []
    }
  },
  async created () {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')

      this.alldatas = res.data
      // console.log(res.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Eroare')
    }
  }
}
</script>
