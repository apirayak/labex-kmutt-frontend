import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import AccessLab from '../views/AccessLab.vue'
import Lab from '../views/Lab.vue'
import LabRole from '../views/LabRole.vue'
import LabTime from '../views/LabTime.vue'
import Confirm from '../views/Confirm.vue'
import Learn_1 from '../views/Learn_1.vue'
import Learn_2 from '../views/Learn_2.vue'
import LabDetail_1 from '../views/LabDetail_1.vue'
import LabDetail_2 from '../views/LabDetail_2.vue'
import LabDetail_3 from '../views/LabDetail_3.vue'
import LabDetail_4 from '../views/LabDetail_4.vue'
import LabDetail_5 from '../views/LabDetail_5.vue'
import LabType from '../views/LabType.vue'
import store from '../store/store.js'
import LabSum from '../views/LabSum.vue'
import TestAxios from '../views/TestAxios.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/access-lab',
    name: 'AccessLab',
    component: AccessLab,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/learn-1',
    name: 'Learn_1',
    component: Learn_1,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/learn-2',
    name: 'Learn_2',
    component: Learn_2,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-detail-1',
    name: 'LabDetail_1',
    component: LabDetail_1,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-detail-2',
    name: 'LabDetail_2',
    component: LabDetail_2,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-detail-3',
    name: 'LabDetail_3',
    component: LabDetail_3,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-detail-4',
    name: 'LabDetail_4',
    component: LabDetail_4,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-detail-5',
    name: 'LabDetail_5',
    component: LabDetail_5,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-type',
    name: 'LabType',
    component: LabType,
  },
  {
    path: '/lab-sum',
    name: 'LabSum',
    component: LabSum
  },
  {
    path: '/lab',
    name: 'lab',
    component: Lab,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-role',
    name: 'lab-role',
    component: LabRole,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/lab-time',
    name: 'LabTime',
    component: LabTime,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/test',
    name: 'TestAxios',
    component: TestAxios
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.getters.loggedIn) {
    next({ name: 'LogIn' })
  } else {
    next()
  }
})

export default router
