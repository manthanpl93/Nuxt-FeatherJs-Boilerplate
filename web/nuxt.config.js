require('dotenv').config()
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js' },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.0.4/popper.js'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['sass/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/middleware/backend', '~plugins/vue-js-modal.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [['@nuxtjs/dotenv', { filename: '.env.prod' }]],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
    baseURL: 'http://localhost:3031/' // API url to be used in server ( for SSR )
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend (config, ctx) {}
  },
  auth: {
    redirect: {
      callback: '/callback'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/authentication',
            method: 'post',
            propertyName: 'accessToken'
          },
          logout: { url: '/authentication', method: 'delete' },
          user: { url: '/profile', method: 'get' }
        },
        autoLogout: true
      }
    }
  },
  router: {
    linkActiveClass: 'active-link'
  }
}
