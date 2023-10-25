<script setup>
import { ref } from "vue";
import Layout from "../components/Layout.vue";
import { authStore } from "../store/store";
import router from "../router/router";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const userType = ref("");

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  try {
    authStore.registerUser({
      email: email.value,
      password: password.value,
      usertype: userType.value,
    });
    alert("Registration successful");
    router.push("/login");
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>
  <div>
    <Layout>
      <div class="registration-container">
        <h2 class="font-bold text-2xl my-6">Registration Form</h2>
        <form @submit.prevent="register">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />

          <input
            v-model="userType"
            type="text"
            placeholder="Type Of User"
            name="userType"
            required
          />

          <input type="submit" value="Register" />
        </form>
      </div>
    </Layout>
  </div>
</template>

<style scoped>
.registration-container {
  width: 50%;
  margin: 0 auto;
  margin-top: 40px;
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
  background-color: #300406;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}

.registration-container input[type="submit"]:hover {
  background-color: #fbf8f8;
  color: #310a0a;
  border: 2px solid #310a0a;
}
</style>
