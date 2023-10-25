<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li v-if="auth.isAuthenticated">
          <router-link to="/products">Products</router-link>
        </li>
        <li v-if="auth.isAuthenticated">
          <router-link to="/cart"
            >Cart ( {{ cart.totalCartItems }} )</router-link
          >
        </li>
        <li v-if="auth.isAuthenticated">
          <router-link to="/orders">Orders</router-link>
        </li>
        <li v-if="auth.isAuthenticated">
          <router-link to="/checkout">Checkout </router-link>
        </li>
        <li v-if="!auth.isAuthenticated">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="!auth.isAuthenticated">
          <router-link to="/registration">Registration</router-link>
        </li>
        <li v-else @click="auth.logout()">Logout</li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { authStore } from "../store/store";
import { cart } from "../store/cart";
const auth = authStore;
</script>

<style scoped>
.sidebar {
  flex: 1;
  width: 200px;
  background-color: #310a0a;
  color: #fff;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
}

.logo {
  text-align: center;
  padding: 20px 0;
}

.logo img {
  width: 80%;
  max-width: 150px;
  height: auto;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

nav a {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
