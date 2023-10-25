import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Sidebar from "../components/Sidebar.vue";
import Cart from "../components/Cart.vue";
import Checkout from "../components/Checkout.vue";
import Products from "../components/Products.vue";
import Product from "../components/Product.vue";
import Orders from "../components/Orders.vue";
import Login from "../components/Login.vue";
import Registration from "../components/Registration.vue";
import { authStore } from "../store/store";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/sidebar",
      name: "sidebar",
      component: Sidebar,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/products",
      name: "products",
      component: Products,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration,
    },
    {
      path: "/products/:id",
      component: Product,
      name: "product",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/orders",
      component: Orders,
      name: "orders",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/checkout",
      component: Checkout,
      name: "checkout",
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = authStore;
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
