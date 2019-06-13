import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FutureLincoln from '@/components/FutureLincoln'
import FuturePast from '@/components/FuturePast'
import FutureOne from '@/components/FutureOne'
import FutureTwo from '@/components/FutureTwo'
import FutureThree from '@/components/FutureThree'
import FutureFour from '@/components/FutureFour'
import FutureFive from '@/components/FutureFive'
import FutureSix from '@/components/FutureSix'
import Presente from '@/components/Present'
import FutureSeven from '@/components/FutureSeven'
import FutureEight from '@/components/FutureEight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/past',
      name: 'FuturePast',
      component: FuturePast
    },
    {
      path: '/future-one',
      name: 'FutureOne',
      component: FutureOne
    },
    {
      path: '/future-two',
      name: 'FutureTwo',
      component: FutureTwo
    },
    {
      path: '/future-three',
      name: 'FutureThree',
      component: FutureThree
    },
    {
      path: '/future-four',
      name: 'FutureFour',
      component: FutureFour
    },
    {
      path: '/future-five',
      name: 'FutureFive',
      component: FutureFive
    },
    {
      path: '/future-six',
      name: 'FutureSix',
      component: FutureSix
    },
    {
      path: '/future-seven',
      name: 'FutureSeven',
      component: FutureSeven
    },
    {
      path: '/future-eight',
      name: 'FutureEight',
      component: FutureEight
    },

    {
      path: '/lincoln',
      name: 'FutureLincoln',
      component: FutureLincoln
    }
  ]
})
