<template>
  <section class="section">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <a @click.stop="$router.push('/posts')" class="backButton">
            <span class="fa-stack fa-lg">
              <b-icon icon="arrow-left" />
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

<style lang="scss">
.backButton {
  position: fixed;
  left: 10px;
  bottom: 10px;
  z-index: 9;
  transition: 0.3s ease;
  background-color: #ccc;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
