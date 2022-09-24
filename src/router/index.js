import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageView
  },
  {
    path: '/ranking',
    name: 'ranking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RanKing.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router