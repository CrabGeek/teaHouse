import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue');
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const Checkpage = () => import("../views/checkorder/Checkpage.vue")

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
  },
  {
    path: '/checkpage',
    name: 'Checkpage',
    component: Checkpage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
