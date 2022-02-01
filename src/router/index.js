import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VuePrlx from 'vue-prlx'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Experience from '@/components/Experience.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'

Vue.use(BootstrapVue)
Vue.use(VueSmoothScroll)
Vue.use(VuePrlx)
Vue.use(Element, { locale })
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Experience',
      component: Experience
    },
    {
      path: '/Project',
      component: Project
    },
    {
      path: '/Contact',
      component: Contact
    }
  ]
})
