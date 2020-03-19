import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ron_swanson',
    name: 'Swanson',
    component: () => import('../views/Swanson.vue')
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/Random.vue')
  },
  {
    path: '/trump',
    name: 'Trump',
    component: () => import('../views/Trump.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router