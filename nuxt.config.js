const pkg = require('./package')
// const path = require('path')
require('dotenv').config()

module.exports = {
  mode: 'universal',

  // server: {
  //   port: process.env.APP_PORT, // default: 3000
  //   host: process.env.APP_HOST // default: localhost
  // },

  env: {
    baseUrl: process.env.APP_URL || 'http://localhost:3000',
    version: pkg.version || '1.0.0'
  },

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'WRPM - Digital Creative Agency Belgrade',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500&display=swap'
        // href: 'https://fonts.googleapis.com/css?family=Turret+Road:300,400,500,700&display=swap'
        // href: 'https://fonts.googleapis.com/css?family=Mansalva&display=swap'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/app.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/global-components.js',
    '~plugins/filters.js',
    '~plugins/check-view.js',
    {
      src: '~/plugins/fbpixel.js',
      ssr: false
    }
  ],

  styleResources: {
    scss: ['~assets/scss/design.scss']
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/google-analytics'
  ],

  'google-analytics': {
    id: process.env.GOOGLE_TRACKING_ID
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {

    // extract css for production build
    extractCSS: process.env.NODE_ENV === 'development' ? false : true,

    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.'
        // name: undefined,
        // cacheGroups: {}
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/,
        //   options: {
        //     fix: true
        //   }
        // })
      }
    }
  }
}
