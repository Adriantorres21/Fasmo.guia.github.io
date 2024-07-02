import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/', redirect: '/Inicio' },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'default',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Default.vue'),
    children: [
      {
        path: 'inicio',
        component: () => import('../pages/Default.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router