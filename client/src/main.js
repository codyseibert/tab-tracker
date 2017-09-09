// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
