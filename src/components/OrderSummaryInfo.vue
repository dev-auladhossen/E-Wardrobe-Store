<template>
  <div class="step-container border rounded shadow-lg py-6 my-3">
    <h2 class="text-xl font-bold">Order Summary</h2>
    <form class="form" @submit.prevent="nextStep">
      <p>
        Order Number : <strong> {{ orderNumber }}</strong>
      </p>
      <p>
        Estimated Delivery Date: <strong>{{ estimatedDeliveryDate }}</strong>
      </p>
      <div class="flex items-center my-5">
        <p class="w-2/3">Subtotal</p>
        <p>
          <strong>${{ cart.totalPrice }}</strong>
        </p>
      </div>
      <hr class="mx-8" />

      <div class="flex items-center my-5">
        <p class="w-2/3">Shipping</p>
        <p>
          <strong>$70</strong>
        </p>
      </div>
      <hr class="mx-8" />

      <div class="flex items-center my-5">
        <p class="w-2/3">Total</p>
        <p>
          <strong>${{ cart.totalPrice + 70 }}</strong>
        </p>
      </div>
      <hr class="mx-8" />

      <div class="form-group">
        <button @click="previousStep" class="mx-2">Cancel</button>
        <button @click="nextStep" type="submit" class="next-button">
          Place Order
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import {
  cart,
  orderNumber,
  estimatedDeliveryDate,
  checkoutCompleted,
} from "../store/cart";

import { ref } from "vue";
import Swal from "sweetalert2";
const emit = defineEmits(["orderSubmitted", "cancelOrder"]);

const previousStep = () => {
  emit("cancelOrder");
};

const nextStep = () => {
  emit("orderSubmitted");
};
</script>

<style scoped>
.step-container {
  max-width: 400px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.next-button {
  width: 50%;
  padding: 10px 20px;
  background-color: #009b9e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.next-button:hover {
  background-color: #008082;
}
</style>
