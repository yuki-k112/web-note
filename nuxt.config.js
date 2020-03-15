require("dotenv").config();
const { API_KEY } = process.env;

import axios from 'axios'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/_reset.scss', lang: 'scss' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      {src:'~/plugins/validation.js'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    API_KEY
  },
  // router:{
  //   middleware:'getData',
  // },
  styleResources: {
    scss: [
        '~/assets/scss/_variables.scss',
        '~/assets/scss/_mixin.scss',
    ],
  },
  router:{
    middleware:'fetchData',
  },
  generate:{
    async routes(){
        const res = await axios.get('https://web-note.microcms.io/api/v1/article', {
            headers: { "X-API-KEY": process.env.API_KEY }
        })
        res.data.contents.map(item => {
            return {
                route:`/${item.category.path}/${item.id}`,
                payload:item
            }
        })
    }
},}
