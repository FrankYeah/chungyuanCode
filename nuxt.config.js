import webpack from 'webpack';

export default {
  mode: 'universal',
  // generate: {
  //   dir: '../dist'
  // },
  target: 'static',
  router: {
    // base: '/sugardaddyDevelop/dist/',
    base: '/chungyuan/',
    // middleware: ['auth'],
  },
  head: {
    titleTemplate: '%s',
    title: '鬼朋友度中元',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title'  , content: '鬼朋友度中元'},
      { hid: 'og:image' , property: 'og:image' , content: 'icon.png'},
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
      // { hid: 'og:url' , property: 'og:url' , content: ''},
      { hid: 'description', name: 'description', content: '鬼朋友度中元' },
      { hid: 'og:description' , property: 'og:description' , content: '鬼朋友度中元'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/styles/global.css',
    '~assets/styles/global.scss',
    '~assets/fonts/sfpro/sfpro.css',
    // 'swiper/swiper-bundle.css',
    'swiper/css/swiper.css',
    'animate.css/animate.css',
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-awesome-swiper',
    { src: '~/plugins/vue-lazyload', ssr: true },
    '~plugins/element-ui',
    '~/plugins/echarts',
    '~/plugins/axios',
    { src: '~/plugins/fb-sdk', ssr: false },
    '~/plugins/moments',
    { src: '~/plugins/gtag'},
    { src: '~plugins/vue-quill-editor.js', ssr: false },
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // proxy https://tiahi5914.medium.com/前端筆記-nuxt-js使用axios跨域請求代理配置-解決cors問題-75564fe5780
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY, // Better would be from 'process.env.API_KEY' and with '.env' file
    version: 3, // Or 3
  },
  axios: {
    baseUEL: process.env.API_URL,
    // withCredentials: true,
    // init(axios) {
    //   axios.defaults.withCredentials = true
    // }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
      if (!isDev) {
          config.output.publicPath = './_nuxt/'
      }
      return config;
      
    },
    transpile: ['resize-detector'],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    postcss: {
      'postcss-px2rem-exclude': {
          emUnit: 75,
          exclude: '/node_modules|vant/'
      },
      'autoprefixer': {
        flexbox: true,
        grid: true,
        overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
      },
      order: 'cssnanoLast'
    },
    vendor: ['vue-lazyload', 'element-ui'],
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      })
    ]
  }
}
