import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import( '../views/About.vue'),
  },
  {
    path: '/meetingInfo/:id',
    name: 'MeetingInfo',
    component: () => import('../views/MeetingInfo.vue')
  },
];


const router = new VueRouter({
  routes
})

export default router
