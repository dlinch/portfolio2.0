import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Journal from '@/components/Journal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats,
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: Hobbies,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/journal',
      name: 'Journal',
      component: Journal,
    },
  ],
});
