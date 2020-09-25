<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse" />

      <nuxt-link to="/">
        <img id="brand" src="~/assets/logofont.png">
      </nuxt-link>
      <div>
        <img
          v-b-toggle.sidebar-right
          class="svg-opacity"
          src="~/assets/cart.svg"
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
          <nuxt-link to="produse">
            PRODUSE
          </nuxt-link>
          <nuxt-link to="about">
            DESPRE NOI
          </nuxt-link>
          <nuxt-link to="discount">
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

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
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
