<script setup>
import Layout from "../components/Layout.vue";
</script>
<template>
  <div>
    <Layout>
      <section class="contact-form p-6 flex gap-6">
        <div>
          <img
            src="https://www.jaispring.com/assets/img/responsive-banner/contact-banner.jpg"
            height="400"
            width="400"
            alt=""
          />
        </div>
        <div>
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </Layout>
  </div>
</template>

<style scoped>
.contact-form {
  text-align: center;
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
