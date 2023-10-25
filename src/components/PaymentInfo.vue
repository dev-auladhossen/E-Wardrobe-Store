<script setup>
import { ref, watch } from "vue";
import Swal from "sweetalert2";
import { cart } from "../store/cart";
const emit = defineEmits(["shippingInfoSubmitted", "previousStepClicked"]);

const paymentOptions = ref("cash");
const billingAddress = ref("");

const number = ref("");
const pass = ref("");

const isCreditCard = ref(false);
const isBkash = ref(false);

const methodName = ref("");

const previousStep = () => {
  emit("previousOfPayment");
};

const formValidation = () => {
  Swal.fire({
    title: "Empty Input(s)!",
    text: "Please fil up the form",
    confirmButtonText: "OK",
  });
};

const placeOrder = () => {
  const payInfo = {
    total: cart.totalPrice,
    quantity: cart.totalCartItems,
    items: cart.items,
    paymentMethod: paymentOptions.value,
    billingAddress: billingAddress.value,
  };
  if (billingAddress.value.length > 0) {
    if (isCreditCard.value || isBkash.value) {
      if (number.value.length == 0 || pass.value.length == 0) {
        formValidation();
      } else {
        emit("payment", payInfo);
      }
    } else {
      emit("payment", payInfo);
      console.log(payInfo);
    }
  } else {
    formValidation();
  }
};

watch(paymentOptions, (newMethod, oldMethod) => {
  if (newMethod == "creditCard") {
    methodName.value = "Credit Card";
    isCreditCard.value = true;
    isBkash.value = false;
  } else if (newMethod == "bkash") {
    methodName.value = "BKash Account";
    isCreditCard.value = false;
    isBkash.value = true;
  } else {
    isCreditCard.value = false;
    isBkash.value = false;
  }
});
</script>

<template>
  <div class="step-container border rounded shadow-lg py-6 my-3">
    <h2 class="text-xl font-bold">Payment Information</h2>
    <form class="form" @submit.prevent="nextStep">
      <div class="form-group">
        <label for="paymentOptions">Payment Options:</label>
        <select id="paymentOptions" v-model="paymentOptions">
          <option value="creditCard">Credit Card</option>
          <option value="bkash">BKash</option>
          <option value="cash">Cash On Delivery</option>
        </select>
      </div>
      <div class="form-group">
        <label for="billingAddress">Billing Address:</label>
        <textarea id="billingAddress" v-model="billingAddress"></textarea>
      </div>
      <div v-if="isBkash || isCreditCard" class="form-group">
        <h3>{{ methodName }} Info</h3>
        <label for="billingAddress">Number:</label>
        <input type="number" v-model="number" />
        <label for="password">Password:</label>
        <input type="password" v-model="pass" />
      </div>
      <div class="form-group">
        <button @click="previousStep" class="mx-2">Previous</button>
        <button @click="placeOrder" type="submit" class="next-button">
          Pay Now
        </button>
      </div>
    </form>
  </div>
</template>

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
  width: 30%;
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

.step-container textarea {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.step-container select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
