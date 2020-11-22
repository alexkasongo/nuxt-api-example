## Note...

- Axios is used to retrieve a data object from an external API. This data object is used to to fill our Vuex Store. State is past down from our Vuex Store to the Posts page. Using each post's UID we are able to filter all the posts.
- The head property for the dynamic post route is using the title property from the returned post object to set the meta title property
- We're using persistent state to store state to local storage. This allows for the not to break on posts/post page reloads.
- We're using Nuxt's nuxtServerInit method to handle displaying the correct post on the dynamic post route if the page's content is delivered via server. We're also using it to create correct route names for static site deploy.

### More...

- Nuxt Modules are used to add Beufy and markdown-it.
- Axios is used as a Nuxt plugin, which is added durin the npx create-nuxt-app.
- I am using Githup pages for hosting this example as a static site.
- [Nuxt Documentation](https://nuxtjs.org/docs/2.x/get-started/installation)
