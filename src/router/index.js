import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectView from '@/views/ProjectView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProfileView from '@/views/ProfileView.vue';
import WelcomeView from '@/views/WelcomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: HomeView,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/projects',
      name: 'Projekte',
      component: ProjectView,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/profile',
      name: 'Profil',
      component: ProfileView,
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/welcome',
      name: 'Willkommen',
      component: WelcomeView,
      meta: {
        header: false,
        footer: false
      }
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        header: true,
        footer: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
      meta: {
        header: false,
        footer: true
      }
    }
  ]
});

export default router;
