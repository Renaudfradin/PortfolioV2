import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/home.vue'
import About from '@views/about.vue'
import Skills from '@views/skills.vue'
import Projects from '@views/projects.vue'
import Work from '@components/Work/Work.vue'
import Contact from '@views/contact.vue'
import NotFound from '@views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title: 'Renaud Fradin'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        title: 'Renaud Fradin - About'
      }
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
      meta:{
        title: 'Renaud Fradin - Skills'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta:{
        title: 'Renaud Fradin - Projects'
      }
    },
    {
      path: '/work/:name',
      name: 'Work',
      component: Work,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta:{
        title: 'Renaud Fradin - Contact'
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
  if (router.currentRoute._value.name == "Work") {
     document.title = router.currentRoute._value.params.name
  }
});

export default router