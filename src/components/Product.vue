//create home component
<script setup>
import Layout from "../components/Layout.vue";
import { useRoute } from "vue-router";
import { ref, reactive, onBeforeMount } from "vue";
import axios from "axios";
import { cart } from "../store/cart";
const route = useRoute();
const id = route.params.id;
const product = reactive({});
const comments = ref([]);
onBeforeMount(() => {
  axios.get(`https://ecom.coderstream.com/api/products/${id}`).then((res) => {
    product.id = res.data.id;
    product.title = res.data.title;
    product.body = res.data.body;
    product.image = res.data.image;
    product.price = res.data.price;
    product.category = res.data.category;
    product.rating_count = res.data.rating_count;
    product.description = res.data.description;
  });
});
</script>
<template>
  <Layout>
    <div class="px-6 w-2/3 mx-auto">
      <article class="my-10 border-2 border-teal-600 rounded-lg p-3">
        <h1 class="text-xl font-bold mb-5">
          {{ product.title }}
        </h1>
        <div class="flex gap-3">
          <img class="w-60" :src="product.image" alt="" />
          <div class="text-left">
            {{ product.description }}
            <div>
              <p class="my-3">Category: {{ product.category }}</p>
              <p class="my-3">Rating: {{ product.rating_count }}</p>
              <p class="font-bold my-3">Price: ${{ product.price }}</p>
              <button
                @click="cart.addItem(product)"
                class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
</template>

<style></style>
