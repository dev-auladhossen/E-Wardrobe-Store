<script setup>
import Layout from "../components/Layout.vue";
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { cart } from "../store/cart";
const orders = ref([]);

onBeforeMount(() => {
  orders.value = JSON.parse(localStorage.getItem("orders")) || [];
  console.log("orders", orders.value);
});

const searchField = ["orderNumber", "paymentMethod", "total", "deliveryDate"];
const searchValue = ref();

const headers = ref([
  { text: "ORDER NO.", value: "orderNumber", sortable: true },
  { text: "ITEMS", value: "items" },
  { text: "PAYMENT METHOD", value: "paymentMethod", sortable: true },
  { text: "QUANTITY", value: "quantity" },
  { text: "DELIVERY DATE", value: "deliveryDate" },
  { text: "AMOUNT", value: "total", sortable: true },
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
            Orders
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
              :items="orders"
              :rows-per-page="5"
              :search-field="searchField"
              :search-value="searchValue"
              :sort-by="sortBy"
              :sort-type="sortType"
              multi-sort
            >
              <template #item-items="item">
                <div v-for="(singleItem, key) in item.items" :key="key">
                  <ul>
                    <li>{{ singleItem.product.title }}</li>
                  </ul>
                </div>
              </template>
            </EasyDataTable>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<style></style>
