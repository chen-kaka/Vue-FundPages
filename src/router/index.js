import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Main from '@/view/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
