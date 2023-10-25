<script setup>
import Layout from "../components/Layout.vue";
</script>
<template>
  <div>
    <Layout>
      <div>      
        <section class="hero">
          <h2>Welcome to our store!</h2>
          <p>Discover the best products for your needs.</p>
          <a href="#" class="btn">Shop Now</a>
        </section>
      </div>
    </Layout>
  </div>
</template>

<style scoped>
header {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

/* Styling for the hero section */
.hero {
  text-align: center;
  padding: 50px;
  background-color: #e6e6e6;
}

/* Styling for the products section */
.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.product {
  margin: 20px;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.product img {
  max-width: 100%;
  height: auto;
}

/* Basic styling for the footer */
footer {
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
}
</style>
