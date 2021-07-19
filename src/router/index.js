import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import About from '../components/About/About.vue';
import Skills from '../components/Skills/Skills.vue';
import Works from '../components/Works/Works.vue';
import Contact from '../components/Contact/Contact.vue';
import Notfound from '../components/Notfound/Notfound.vue';

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