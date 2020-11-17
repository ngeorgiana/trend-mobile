<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse" />

      <nuxt-link to="/">
        <img id="brand" src="~/static/logofont.png">
      </nuxt-link>
      <div>
        <img
          v-b-toggle.sidebar-right
          class="svg-opacity"
          src="~/static/cart.svg"
        >
        <b-sidebar
          id="sidebar-right"
          title="Sidebar"
          right
          shadow
          lazy
        >
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
          </div>
        </b-sidebar>
      </div>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link v-b-toggle.nav-collapse.hidden to="/category">
            PRODUSE
          </nuxt-link>
          <nuxt-link v-b-toggle.nav-collapse.hidden to="/category/brand">
            BRANDURI
          </nuxt-link>
          <nuxt-link v-b-toggle.nav-collapse.hidden to="/category/brand/model">
            MODELE
          </nuxt-link>
          <nuxt-link v-b-toggle.nav-collapse.hidden to="/about">
            DESPRE NOI
          </nuxt-link>
          <nuxt-link v-b-toggle.nav-collapse.hidden to="/discount">
            LICHIDARE DE STOC
          </nuxt-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Cauta" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Cauta Produse
            </b-button>
          </b-nav-form>
          <div v-if="$auth.loggedIn">
            {{ $auth.user.email }}
          </div>
          <div v-else>
            <nuxt-link v-b-toggle.nav-collapse.hidden to="/logon">
              INITIERE SESIUNE
            </nuxt-link>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style>

#brand {
  width: 60px;
}

.svg-opacity {
  width: 30px;
  margin: 4px 12px;
  opacity: 0.6;
}

.navbar-light .navbar-toggler {
  color: transparent;
  border-color: transparent;
}

a {
  padding: 0.5rem 0;
  color: rgba(0, 0, 0, 0.6);
}

</style>
