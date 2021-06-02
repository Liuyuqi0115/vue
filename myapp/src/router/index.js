import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '../views/Center.vue'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Search from '../views/Search.vue'
import Nowplaying from '../views/film/Nowplaying'
import ComingSoon from '../views/film/ComingSoon'
import Detail from '../views/Detail'
import Login from '../views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/film'
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail/:myid',
    component: Detail,
    name: 'lyqDetail'
  },

  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingSoon',
        component: ComingSoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },

  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/cinema/search',
    component: Search
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/city',
    component: () => import('../views/SelectCity.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, nest) => {
  const auth = ['/center', '/order', '/money', '/card']
  if (auth.includes(to.fullPath)) {
    localStorage.getItem('token') != null ? nest() : nest('/login')

    console.log('验证token')
  } else {
    nest()
  }
})
export default router
