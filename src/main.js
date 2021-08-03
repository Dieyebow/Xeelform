// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// src/main.js
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import _ from 'lodash'
import {ValidationObserver} from 'vee-validate'
import vSelect from 'vue-select'
import VueResource from 'vue-resource';

import VueRouter from 'vue-router'

import VuePageTitle from 'vue-page-title'


 

Vue.use(VuePageTitle, {
  // prefix: 'My App - ',
  suffix: '- Xeelform '
})

Vue.use(VueResource);

Vue.use(VueRouter)


Vue.component('validation-observer',ValidationObserver);
Vue.component('v-selector',vSelect)

Vue.config.productionTip = false

 /* eslint-disable no-new */
new Vue({
  router,
  http:{
      emulateJSON: true,
      emulateHTTP: true
  },
  vuetify,
  _,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
