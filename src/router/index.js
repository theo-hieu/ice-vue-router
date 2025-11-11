import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Testing from '../views/TestView.vue'
import TestId from '../views/TestId.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing
  },
  {
    path: '/test/:id',
    name: 'TestId',
    component: TestId,
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router