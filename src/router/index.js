import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Studies from '../components/Studies.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Four0Four from "../components/Four0Four";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eduction',
    name: 'Studies',
    component: Studies
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '*',
    component: Four0Four
  },


] ;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
