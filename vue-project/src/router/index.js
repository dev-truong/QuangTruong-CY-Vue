import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    title: 'TodoList',
    name: 'TodoList',
    path: '/todolist',
    component: () => import('@/views/TodoList/index.vue')
  },
  {
    title: 'Bài 2',
    name: 'Bai2',
    path: '/bai2',
    component: () => import('@/views/BaiTapVue/Bai2/Bai2.vue')
  },
  {
    title: 'Bài 3',
    name: 'Bai3',
    path: '/bai3',
    component: () => import('@/views/BaiTapVue/Bai3/Bai3.vue')
  },
  {
    title: 'Bài 4',
    name: 'Bai4',
    path: '/bai4',
    component: () => import('@/views/BaiTapVue/Bai4/Bai4.vue')
  },
  {
    title: 'Bài 5',
    name: 'Bai5',
    path: '/bai5',
    component: () => import('@/views/BaiTapVue/Bai5/CountDown.vue')
  },
  {
    title: 'Bài 6',
    name: 'Bai6',
    path: '/bai6',
    component: () => import('@/views/BaiTapVue/Bai6/MoneyConvert.vue')
  },
  {
    title: 'Bài 7',
    name: 'Bai7',
    path: '/baiai',
    component: () => import('@/views/BaiTapVue/Bai7/ArticleList.vue')
  },
  {
    title: 'Bài 11',
    name: 'Bai11',
    path: '/bai11',
    component: () => import('@/views/BaiTapVue/Bai11/IndexB11.vue')
  },
  {
    title: 'Bài 12',
    name: 'Bai12',
    path: '/bai12',
    component: () => import('@/views/BaiTapVue/Bai12/Bai12.vue')
  },
  {
    title: 'Bài 13',
    name: 'Bai13',
    path: '/bai13',
    component: () => import('@/views/BaiTapVue/Bai13/IndexB13.vue')
  },
]

export const subRoutes = [
  {
    name: 'Bai7Detail',
    path: '/article/detail/:id',
    component: () => import('@/views/BaiTapVue/Bai7/ArticleDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...subRoutes]
})

export default router
