//import HeaderNavTop from './components/HeaderNavTop.vue'
import Home from './components/Home/Home.vue'
import About from './components/About/About.vue'
import Skills from './components/Skills/Skills.vue'
import Works from './components/Works/Works.vue'
import Contact from './components/Contact/Contact.vue'
export default [
    {path: '*' ,component:Home},
    {path: '/' ,component:Home},
    {path: '/Home' ,component:Home},
    {path: '/About' ,component:About},
    {path: '/Skills' ,component:Skills},
    {path: '/Works' ,component:Works},
    {path: '/Contact' ,component:Contact},
]