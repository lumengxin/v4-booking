import Vue from 'vue'
import VueRouter from 'vue-router'
const Stays = () => import('../views/Stays/Stays')
const Flights = () => import('../views/Flights/Flights')
const Cars = () => import('../views/Cars/Cars')
const Attractions = () => import('../views/Attractions/Attractions')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/stays'
  },
  {
    path: '/stays',
    component: Stays
  },
  {
    path: '/flights',
    component: Flights
  },
  {
    path: '/cars',
    component: Cars
  },
  {
    path: '/attractions',
    component: Attractions
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
