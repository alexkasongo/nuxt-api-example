export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-api-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt API Example - Using Vuex, axios, and a REST API with Nuxt by Alex Kasongo' },
      { property: 'og:title', content: 'Nuxt API Example' },
      { property: 'og:description', content: 'Showing a collections of posts and using dynamic routes for individual posts with Nuxt.js Vuex, and an API.' },
      // { property: 'og:image', content: 'https://nuxt-api-example.netlify.com/nuxt-api-example-meta-image.jpg' },
      // { property: 'og:url', content: 'https://nuxt-api-example.netlify.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: 'Nuxt API Example' },
      { name: 'twitter:image:alt', content: 'Screenshot of home page for demo site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/scss/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/persistentState.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Markdown it
    ['@nuxtjs/markdownit', { linkify: true }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
