export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SZFM_Bolt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'SZFM beadando project!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/91.jpg' }
    ]
  },
  loading: { // nem müködik :D
    color: 'yellow',
    height: '5px',
    duration: 50},

  loadingIndicator: {// nem müködik :D
    name: 'circle',
    color: '#3B8070',
    background: 'yellow'
  },
  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],
  transition: {
    name: "fade",
    mode: "out-in"
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/date-filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router:{
    middleware: 'log'
  }
  
}
