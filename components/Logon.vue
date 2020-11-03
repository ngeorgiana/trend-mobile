<template>
  <div>
    <h1>Autentificare</h1>
    <b-form @submit="userLogin">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="login.email"
          type="email"
          required
          placeholder="Enter email"
        />
        <b-form-input
          id="input-2"
          v-model="login.password"
          type="password"
          required
          placeholder="password"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">
        Initiere sesiune
      </b-button>
    </b-form>
    <div>
      <nuxt-link to="reset">
        Ai uitat parola?
      </nuxt-link>
    </div>
    <div>
      Nu aveti cont?
      <nuxt-link to="signup">
        Inregistrati-va!
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin () {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        // eslint-disable-next-line no-console
        console.log(response)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    }
  }
}
</script>
