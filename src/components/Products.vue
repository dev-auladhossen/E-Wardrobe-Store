<script setup>
import Layout from "../components/Layout.vue";
import data from "../data.json";
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { cart } from "../store/cart";
const products = ref([]);

onBeforeMount(() => {
  axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
    products.value = res.data;
    console.log("res", products.value);
  });
});

const searchField = ["title", "price"];
const searchValue = ref();

const headers = ref([
  { text: "TITLE", value: "title", sortable: true },
  { text: "PRODUCT", value: "image" },
  { text: "PRICE", value: "price", sortable: true },
  { text: "ACTION", value: "action" },
]);

const sortBy = ["title", "price"];
const sortType = ["desc", "asc"];
</script>
<template>
  <div>
    <Layout>
      <div class="bg-white">
        <div class="mx-auto px-12 py-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>
          <div class="text-left my-6">
            <input
              placeholder="Search..."
              class="my-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
              type="text"
              v-model="searchValue"
            />
            <EasyDataTable
              buttons-pagination
              alternating
              :headers="headers"
              :items="products"
              :rows-per-page="5"
              :search-field="searchField"
              :search-value="searchValue"
              :sort-by="sortBy"
              :sort-type="sortType"
              multi-sort
            >
              <template #item-image="{ images }">
                <img :src="images" height="50" width="50" class="m-2" alt="" />
              </template>
              <template #item-price="{ price }"> ${{ price }} </template>
              <template #item-title="{ id, title }">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <router-link :to="{ name: 'product', params: { id: id } }">
                      {{ title }}
                    </router-link>
                  </h3>
                </div>
              </template>
              <template #item-action="item">
                <button
                  @click="cart.addItem(item)"
                  class="mt-2 bg-amber-900 hover:bg-amber-800 text-white text-sm py-2 px-4 rounded"
                >
                  Add To Cart
                </button>
              </template>
            </EasyDataTable>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<style></style>
