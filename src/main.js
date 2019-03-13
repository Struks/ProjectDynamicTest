// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import jQuery from 'jquery'
global.jQuery = jQuery
import Vuelidate from 'vuelidate'
let Bootstrap = require('bootstrap')
import SvgIcon from 'vue-svgicon'
// import * as svgicon from 'vue-svgicon';


Vue.use(Vuelidate)
Vue.config.productionTip = false



 //Default tag name is 'svgicon'
Vue.use(SvgIcon, {
    tagName: 'svgicon',
    classPrefix: 'vue-svg',
});

  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
