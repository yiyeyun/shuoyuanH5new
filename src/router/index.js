import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../views/login')
    },
    {
      path: '/details',
      component: () => import('@/views/details')
    },
    {
      path: '/record',
      component: () => import('@/views/details/record')
    }
  ]
})
