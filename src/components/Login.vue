<script setup>
import Layout from "../components/Layout.vue";

import { ref } from "vue";
import { authStore } from "../store/store";
const auth = authStore;

import router from "../router/router";

const username = ref("emilys");
const password = ref("emilyspass");

</script>
<template>
  <div>
    <Layout>
      <p class="mt-10">
        <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <div class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input v-model="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <!-- <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p> -->
                        <p class="text-right">
                            <button @click="auth.authenticate(username, password)"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <span>Login</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </p>
    </Layout>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.login-container {
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-container h2 {
  text-align: center;
}

.login-container input[type="text"],
.login-container input[type="password"] {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.login-container input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #310a0a;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}

.login-container input[type="submit"]:hover {
  background-color: #fbf8f8;
  color: #310a0a;
  border: 2px solid #310a0a;
}

.registration-container {
  width: 40%;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.registration-container h2 {
  text-align: center;
}

.registration-container input[type="text"],
.registration-container input[type="email"],
.registration-container input[type="password"] {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.registration-container select {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.registration-container input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}

.registration-container input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
