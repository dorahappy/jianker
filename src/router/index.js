import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/index/AppHome'
import AllPartTime from '@/components/AllPartTime/AppAllPartTime'
import AppCollege from '@/components/college/AppCollege'
import AppMessage from '@/components/message/AppMessage'
import AppMine from '@/components/mine/AppMine'
import AppRegister from '@/components/register/AppRegister'
import AppLogin from '@/components/login/AppLogin'
import AppDetail from '@/components/detail/AppDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component: AppHome
    },
    {
      path:'/allwork',
      name:'allwork',
      component: AllPartTime
    },
    {
      path:'/college',
      name:'college',
      component: AppCollege
    },
    {
      path:'/message',
      name:'message',
      component: AppMessage
    },
    {
      path:'/mine',
      name:'mine',
      component: AppMine
    },
    {
      path:'/register',
      name:'register',
      component: AppRegister
    },
    {
      path:'/login',
      name:'login',
      component: AppLogin
    },
    {
      path:'/detail',
      name:'detail',
      component: AppDetail
    }
  ]
})
