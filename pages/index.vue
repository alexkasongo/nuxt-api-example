<template>
  <section class="section">
    <!-- <div class="columns is-desktop"> -->
    <section class="columns is-desktop hero is-primary mb-5">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Vuex, axios, and a REST API with Nuxt</h1>
          <h2 class="subtitle">
            Showing a collections of posts and using dynamic routes for
            individual posts
          </h2>
        </div>
      </div>
    </section>
    <div
      v-html="content"
      class="columns is-desktop contentWrapper content mb-5"
    ></div>
    <div class="columns is-desktop contentContainer mt-5">
      <a
        class="button is-info is-outlined viewPostsButton"
        @click="$router.push('/posts')"
      >
        <span>View Posts</span>
        <span class="icon">
          <i class="fa fa-arrow-circle-right"></i>
        </span>
      </a>
    </div>
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
  // mounted() {
  //   this.$store.dispatch('getPosts')
  // },
}
</script>
