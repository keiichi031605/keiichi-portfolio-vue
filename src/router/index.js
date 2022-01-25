import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VuePrlx from 'vue-prlx'
import Element from 'element-ui'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(BootstrapVue)
Vue.use(VueSmoothScroll)
Vue.use(VuePrlx)
Vue.use(Element)
Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
