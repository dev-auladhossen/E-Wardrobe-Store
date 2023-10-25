<script setup>
import Layout from "../components/Layout.vue";
</script>
<template>
  <div>
    <Layout>
      <div>
        <section class="hero">
          <div class="flex gap-8 items-center">
            <img
              height="500"
              width="500"
              src="https://www.corporatevision-news.com/wp-content/uploads/2021/04/ecommerce.jpg"
              alt=""
            />
            <div>
              <h1 class="text-2xl font-bold my-3">Welcome to our store!</h1>
              <p>Discover the best products for your needs.</p>
              <a href="/products" class="btn">Shop Now</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  </div>
</template>

<style scoped>
header {
  background-color: #ffffff;
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
  background-color: #ffffff;
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
