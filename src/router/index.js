import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import About from '@/views/about.vue'
import Skills from '@/views/skills.vue'
import Works from '@/views/works.vue'
import Work from '@/components/Work/Work.vue'
import Contact from '@/views/contact.vue'
import NotFound from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        title: 'About'
      }
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills,
      meta:{
        title: 'Skills'
      }
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works,
      meta:{
        title: 'Works'
      }
    },
    {
      path: '/Work/:name',
      name: 'Work',
      component: Work,
      meta:{
        title: 'Projet'
      }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta:{
        title: 'Contact'
      }
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta:{
        title: '404'
      }
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    },
    {
      path: '/Work/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
});

export default router