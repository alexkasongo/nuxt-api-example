<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item
        class="siteTitle nav-item"
        tag="router-link"
        :to="{ path: '/' }"
      >
        Nuxt API Example
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light" @click="$router.push('/posts')"> Posts </a>
          <a
            class="button is-primary"
            href="https://github.com/alexkasongo/nuxt-api-example"
            target="_blank"
          >
            <b-icon icon="github" />
            <strong>Github Repo</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
  computed: mapState(['menuIsActive']),
  methods: {
    testState() {
      this.$store.commit('toggleMenuState')
    },
  },
}
</script>

<style lang="css">
.siteTitle {
  font-weight: 700;
  font-size: 1.75em;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.35s;
}
.slide-enter,
.slide-leave-active {
  opacity: 0;
}
.nav {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
