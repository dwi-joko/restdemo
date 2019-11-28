import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: () => import('@/components/NotFound')
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.matched.some(record => record.meta.AuthenticationRequired) && !vueAuth.isAuthenticated()) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

Vue.use(Meta)

export default router