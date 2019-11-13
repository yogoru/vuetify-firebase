import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Items from './views/Items'
import Words from './views/Words'
import LogOut from "./views/LogOut"
import Profile from "./views/Profile"
import SignIn from "./views/SignIn"
import SignUp from "./views/SignUp"
import Store from "./store"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/words',
      name: 'words',
      component: Words
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogOut
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter:AuthGuard
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ],
  mode:'history'
})

function AuthGuard(from,to,next) {
  if (Store.getters.isUserAuthenticated)
    next()
  else
    next('/signin')
}