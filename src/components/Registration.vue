<script setup>
import Layout from "../components/Layout.vue";
</script>
<template>
  <div>
    <Layout>
      <div class="registration-container">
        <h2>Registration Form</h2>
        <form>
          <input type="text" placeholder="Username" name="username" required />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
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
