import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // },
  {
    title: 'Bài 1',
    path: '/bai1',
    name: 'bai1',
    component: () => import('../views/Bai1/Bai1.vue')
  },
  {
    title: 'Bài 2',
    path: '/bai2',
    name: 'bai2',
    component: () => import('../views/Bai2/Bai2.vue')
  },
  {
    title: 'Bài 3',
    path: '/bai3',
    name: 'bai3',
    component: () => import('../views/Bai3/Bai3.vue')
  },
  {
    title: 'Bài 4',
    path: '/bai4',
    name: 'bai4',
    component: () => import('../views/Bai4/Bai4.vue')
  },
  {
    title: 'Bài 5',
    path: '/bai5',
    name: 'bai5',
    component: () => import('../views/Bai5/Bai5.vue')
  },
  {
    title: 'Bài 6',
    path: '/bai6',
    name: 'bai6',
    component: () => import('../views/Bai6/Bai6.vue')
  },
  {
    title: 'Bài 7',
    path: '/bai7',
    name: 'bai7',
    component: () => import('../views/Bai7/Bai7.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
