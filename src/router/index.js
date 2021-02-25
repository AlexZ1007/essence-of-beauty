import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Shop from '../components/Shop.vue'
import Cart from '../components/Cart.vue'
import Product from '../components/Product.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import ManageUsers from '../components/Dashboard/ManageUsers.vue'
import ManageProducts from '../components/Dashboard/ManageProducts.vue'

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
  },
  //Auth
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // Dashboard
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/dashboard/users',
    name: 'ManageUsers',
    component: ManageUsers,
  },
  {
    path: '/dashboard/products',
    name: 'DashbManageProducts',
    component: ManageProducts,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
