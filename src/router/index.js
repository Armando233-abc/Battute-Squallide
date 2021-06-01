import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import jokesArea from '../views/jokesArea.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/jokesArea',
    component: jokesArea
  },
  {
    path: '/jokesArea/:id',
    component: () => import('../views/jokesArea.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
