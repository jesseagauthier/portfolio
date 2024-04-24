import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import FreelanceLandingView from '../views/FreelanceLandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects/:id',
      name: 'ProjectView',
      component: ProjectView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    },
    {
      path: '/workwithjesse',
      name: 'Freelance',
      component: FreelanceLandingView
    }
  ]
})

export default router
