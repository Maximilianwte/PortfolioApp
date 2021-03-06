import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/license',
      name: 'license',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/License.vue')
    },
    {
      path: '/image/:name/:id',
      name: 'image',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Image.vue')
    },
    {
      path: '/panel',
      name: 'panel',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Panel.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/Auth.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/Edit.vue')
    }
  ]
})
