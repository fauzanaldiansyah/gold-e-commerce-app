import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Product from '../views/Product.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import addProduct from '../views/AddProduct.vue';
import editProduct from '../views/EditProduct.vue';
import detailProduct from '../views/DetailProduct.vue';
import cart from '../views/Cart.vue';
import checkout from '../views/Checkout.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {isLogin: true}
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {isLogin: true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {isLogin: true}
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: addProduct,
    meta: {isLogin: true}
  },
  {
    path: '/editProduct/:id',
    name: 'editProduct',
    component: editProduct,
    meta: {isLogin: true}
  },
  {
    path: '/detailProduct/:id',
    name: 'detailProduct',
    component: detailProduct,
    meta: {isLogin: true}
  },
  {
    path: '/detailProduct/:id',
    name: 'detailProduct',
    component: detailProduct,
    meta: {isLogin: true}
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
    meta: {isLogin: true}
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout,
    meta: {isLogin: true}
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.isLogin)) {
    if (localStorage.getItem('access_token')) {
      next();
    } else {
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

export default router;
