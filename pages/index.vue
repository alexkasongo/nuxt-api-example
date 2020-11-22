<template>
  <section class="section">
    <!-- <div class="columns is-desktop"> -->
    <section class="columns is-desktop hero is-primary mb-5">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Nuxt, Vuex, Axios & a REST API</h1>
          <h2 class="subtitle">
            Retrieve and display posts from an external API and view each post
            using a dynamic route.
          </h2>
        </div>
      </div>
    </section>
    <section
      v-html="content"
      class="columns is-desktop contentWrapper content mb-5"
    ></section>
    <section class="columns is-desktop contentContainer mt-5">
      <a
        class="button is-info is-outlined viewPostsButton"
        @click="$router.push('/posts')"
      >
        <span>View Posts</span>
        <span class="icon">
          <i class="fa fa-arrow-circle-right"></i>
        </span>
      </a>
    </section>
    <!-- </div> -->
  </section>
</template>

<script>
import HomeContent from 'static/markdown/HomeContent.md'

export default {
  computed: {
    content() {
      return HomeContent
    },
  },
}
</script>
