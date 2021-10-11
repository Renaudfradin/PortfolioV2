import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Skills from '../views/skills.vue';
import Works from '../views/works.vue';
import Contact from '../views/contact.vue';
import Work from '../components/Work/Work.vue'
import Notfound from '../views/404';

const routes = [
  {
    name: 'Home',
    path: '/',
    component:Home,
    meta: {
      title: 'Home'
    }
  },
  {
    name: 'About',
    path: '/About',
    component:About,
    meta: {
      title: 'About'
    }
  },
  {
    name: 'Skills',
    path: '/Skills',
    component:Skills,
    meta: {
      title: 'Skills'
    }
  },
  {
    name: 'Works',
    path: '/Works',
    component:Works,
    meta: {
      title: 'Works'
    }
  },
  {
    name: 'Contact',
    path: '/Contact',
    component:Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    name: 'Work',
    path: '/Work/:name',
    component:Work,
    meta:{
      title: 'Projet'
    }
  },
  {
    name: 'Notfound',
    path: '/404',
    component:Notfound,
    meta:{
      title: '404'
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  console.log(from);
  document.title = to.meta.title;
});

export default router;