<template>
  <section class="section">
    <section class="columns is-desktop hero is-primary mb-5">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Posts</h1>
          <h2 class="subtitle">Displaying some posts</h2>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <p class="title"></p>
        <div class="postsWrapper">
          <template v-for="post in Posts">
            <nuxt-link class="card" :key="post.id" :to="'/post/' + post.id">{{
              post.title
            }}</nuxt-link>
          </template>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Posts Listing',
    }
  },
  fetch({ store }) {
    store.dispatch('getPosts')
  },
  computed: {
    Posts() {
      return this.$store.state.posts
    },
  },
}
</script>

<style lang="scss">
.postsWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  a {
    display: block;
    margin: 1em;
    padding: 1em;
    flex: 1 1 200px;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>