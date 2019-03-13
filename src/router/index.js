import Vue from 'vue' 
import Router from 'vue-router'
import ContactPage from '@/components/ContactPage'
import AboutPage from '@/components/AboutPage'
import HomePage from '@/components/HomePage'
import WorkPage from '@/components/WorkPage'
import  NotFound  from '@/components/NotFound';
import links from '@/components/links'
//import HelloWorld from '@/components/HelloWorld'
//import links from '@/components/links.vue'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/Contact',      
      component: ContactPage
    },
    {
      path:'/About',   
      component: AboutPage
    },
    {
      path:'/',  
      component: HomePage
    },
    {
      path:'/Work',    
      component: WorkPage,
      name:'Work Page'
    },
    // {
    //   path: '*',
    //   component: NotFound
    // }
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/Link',
      name: 'links',
      component: links
    }
  ]
})
