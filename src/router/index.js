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
import AppPosition from '@/components/position/AppPosition'
import AppPartTimeLove from '@/components/college/AppPartTimeLove'
import AppWrite from '@/components/college/AppWrite'
import AppCollegeContent from '@/components/college/AppCollegeContent'
import AppMessageDetail from '@/components/message/AppMessageDetail'
import AppMessagePage from '@/components/message/AppMessagePage'
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
      name: 'college',
      redirect: '/college/',
      component: AppCollege,
      children: [
        { path: '/', name:'collegecontent', component: AppCollegeContent },
        { path: 'publish', name:'publish', component: AppWrite }
      ]
    },
    {
      path:'/message',
      name:'message',
      redirect: '/message/',
      component: AppMessage,
      children: [
        { path: '/', name:'messagecontent', component: AppMessagePage },
        { path: 'show', name:'msgdetail', component: AppMessageDetail }
      ]
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
    },
    {
      path:'/city',
      name:'city',
      component: AppPosition
    },
    {
    	path:'/love',
    	name:'love',
    	component:AppPartTimeLove
    }
  ]
})
