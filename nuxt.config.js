export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "BRITEN Tanzania",
    meta: [
      // Each object in this array is its own meta tag
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
