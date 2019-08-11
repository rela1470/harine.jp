// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Feature from './components/Feature.vue'
Vue.component('Feature', Feature)

import Service from './components/Service.vue'
Vue.component('Service', Service)

import Profile from './components/Profile.vue'
Vue.component('Profile', Profile)

import About from './components/About.vue'
Vue.component('About', About)

import ModalIllust from './components/ModalIllust.vue'
Vue.component('ModalIllust', ModalIllust)

import ModalArtDirection from './components/ModalArtDirection.vue'
Vue.component('ModalArtDirection', ModalArtDirection)

import ModalMovie from './components/ModalMovie.vue'
Vue.component('ModalMovie', ModalMovie)

import ModalDesign from './components/ModalDesign.vue'
Vue.component('ModalDesign', ModalDesign)

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
