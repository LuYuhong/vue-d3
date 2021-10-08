import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TopHeader from '@/components/TopHeader'
import LeftDirect from '@/components/LeftDirect'
import ShowPage from '@/components/ShowPage'
import ShowPageChild1 from '@/components/ShowPageChild1'
import ShowPageChild2 from '@/components/ShowPageChild2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'TopHeader',
      component: TopHeader
    },
    {
      path: '/',
      name: 'LeftDirect',
      component: LeftDirect
    },
    {
      path: '/',
      name: 'ShowPage',
      component: ShowPage
    },
    {
      path: '/',
      name: 'ShowPageChild1',
      component: ShowPageChild1
    },
    {
      path: '/',
      name: 'ShowPageChild2',
      component: ShowPageChild2
    },
  ]
})
