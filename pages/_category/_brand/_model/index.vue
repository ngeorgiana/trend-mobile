<template>
  <div>
    <Model
      v-for="alldata in alldatas"
      :key="alldata.id"
      :title="alldata.title"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Model from '../../../../components/Model'

export default {
  components: {
    Model
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
