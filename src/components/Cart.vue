<script setup>
import Layout from "../components/Layout.vue";
import router from "../router/router";
import Swal from "sweetalert2";
import { cart } from "../store/cart";

const checkout = () => {
  console.log("cart", cart);
  if (cart.totalCartItems > 0) {
    router.push("/checkout");
  } else {
    Swal.fire({
      icon: "error",
      title: "Empty Cart!",
      text: "Please select items to purchase",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/products");
      }
    });
  }
};
</script>

<template>
  <Layout>
    <div class="bg-white">
      <div class="mx-auto px-12 py-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Your Cart
        </h2>
        <div class="text-left w-2/3 mx-auto">
          <div
            class="flex items-center my-5 bg-slate-100 rounded-lg p-2"
            v-for="item in cart.items"
          >
            <p class="w-2/3">
              <router-link
                :to="{ name: 'product', params: { id: item.product.id } }"
              >
                {{ item.product.title }}
              </router-link>
            </p>
            <p>
              <input
                type="number"
                class="w-2/3 text-center border border-current my-3 bg-slate-100 rounded-md mx-3 p-2"
                v-model="item.quantity"
              />
            </p>
            <p class="w-[100px]">
              {{ item.product.price }}
            </p>
            <p class="w-[20px]">
              <font-awesome-icon
                class="cursor-pointer"
                icon="fa-solid fa-xmark"
                @click="cart.removeItem(item.product)"
              />
            </p>
          </div>
          <div class="flex items-center my-5">
            <p class="w-2/3">Total</p>
            <p class="w-[100px]"></p>
            <p>
              <strong>${{ cart.totalPrice }}</strong>
            </p>
          </div>
          <button
            @click="cart.saveCartInLocalStorage()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Cart
          </button>

          <button
            @click="cart.emptyCart()"
            class="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Empty Cart
          </button>

          <button
            @click="checkout"
            class="ml-5 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped></style>
