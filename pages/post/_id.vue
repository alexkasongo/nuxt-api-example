<template>
  <section class="section">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <a @click.stop="$router.push('/posts')" class="backButton">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
              <i class="fa fa-arrow-left fa-stack-1x" aria-hidden="true"></i>
            </span>
          </a>
          <h1 class="title">
            {{ title }}
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="content" v-html="post.body"></div>
    </section>
  </section>
</template>

<script>
// function titleCase(title) {
//   if (title === null || title === '') {
//     return false
//   } else {
//     return title.replace(/\w\S*/g, function (txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
//     })
//   }
//   console.log(`_id.vue - 33 - 🍎`, title)
// }
export default {
  head() {
    return {
      title: this.title,
    }
  },
  data: () => ({
    title: '',
  }),
  fetch({ store, params }) {
    store.dispatch('getPost', params.id)
  },
  computed: {
    post() {
      return this.$store.state.post
    },
    titleCase() {
      const title = this.$store.state.post.title
      if (title === null || title === '') {
        return false
      } else {
        return title.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
      }
    },
  },
  mounted() {
    this.title = this.titleCase
  },
  methods: {},
}
</script>
