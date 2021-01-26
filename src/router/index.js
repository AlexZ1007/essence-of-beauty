import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Shop from '../components/Shop.vue'
import Cart from '../components/Cart.vue'
import Product from '../components/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/shop/product/:id',
    name: 'product',
    component: Product,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
