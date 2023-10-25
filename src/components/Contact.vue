<script setup>
import Layout from "../components/Layout.vue";
</script>
<template>
  <div>
    <Layout>
      <section class="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </Layout>
  </div>
</template>

<style scoped>
.contact-form {
  text-align: center;
  padding: 50px;
}

.contact-form h2 {
  margin-bottom: 20px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact-form button {
  padding: 10px 20px;
  background-color: #310a0a;
  color: white;
  border: 2px solid #310a0a;
  border-radius: 5px;
  cursor: pointer;
}
.contact-form button:hover {
  color: #310a0a;
  background-color: white;
}
</style>
