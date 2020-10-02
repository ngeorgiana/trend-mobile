<template>
  <div>
    <Category
      v-for="alldata in alldatas"
      :key="alldata.id"
      :title="alldata.title"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Category from '../../components/Category'

export default {
  components: {
    Category
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
  },
  head () {
    return {
      title: 'Pagina de category',
      meta: [
        { hid: 'description' },
        { name: 'description', content: 'Category' },
        { name: 'keywords', content: 'cluj, companie, despre brand' }
      ]
    }
  }
}
</script>
