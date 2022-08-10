import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@pages/Home.vue')
  },
  {
    path: '/forum/:id',
    component: () => import('@pages/Forum.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router