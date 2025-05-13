import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUS from '../views/AboutUs.vue'
import ProyectoView from '@/views/ProyectoView.vue'
import PokemonesView from '@/views/PokemonesView.vue';
import CrudView from '@/views/CrudView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crud',
    name: 'crud',
    component: CrudView
  },
  {
    path: '/sobre-nosotros',
    name: 'nosotros',
    component: AboutUS
  },
  {
    path: '/Pokemones',
    name: 'Pokemones',
    component: PokemonesView
  },
  {
    path: '/proyecto',
    name: 'proyecto',
    component: ProyectoView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
