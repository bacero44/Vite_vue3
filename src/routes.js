import { createRouter, createWebHistory } from 'vue-router';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import store from './store/index.js';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    component: About,
    meta: { requiresAuth: true },
  },
  {
    path: '/contact',
    component: Contact,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: Login,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.loggedUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;