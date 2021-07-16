import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import About from '../components/About/About.vue';
import Skills from '../components/Skills/Skills.vue';
import Works from '../components/Works/Works.vue';
import Contact from '../components/Contact/Contact.vue';

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