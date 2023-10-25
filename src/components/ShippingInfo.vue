<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
const emit = defineEmits(["shippingInfoSubmitted", "previousStepClicked"]);

const shippingMethod = ref("standard");
const shippingAddress = ref("");

const previousStep = () => {
  emit("previousOfShipping");
};

const nextStep = () => {
  if (shippingMethod.value.length == 0 || shippingAddress.value.length == 0) {
    Swal.fire({
      title: "Empty Input(s)!",
      text: "Please fil up the form",
      confirmButtonText: "OK",
    });
  } else {
    emit("shippingInfoSubmitted", {
      shippingMethod: shippingMethod.value,
      shippingAddress: shippingAddress.value,
    });
  }
};
</script>

<template>
  <div class="step-container border rounded shadow-lg py-6 my-3">
    <h2 class="text-xl font-bold">Shipping Information</h2>
    <form class="form" @submit.prevent="nextStep">
      <div class="form-group">
        <label for="shippingMethod">Shipping Method:</label>
        <select id="shippingMethod" v-model="shippingMethod">
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
        </select>
      </div>
      <div class="form-group">
        <label for="shippingAddress">Shipping Address:</label>
        <textarea id="shippingAddress" v-model="shippingAddress"></textarea>
      </div>
      <div class="form-group">
        <button @click="previousStep" class="mx-2">Previous</button>
        <button @click="nextStep" type="submit" class="next-button">
          Next
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
