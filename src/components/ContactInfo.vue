<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
const emit = defineEmits(["next"]);

const contactNumber = ref("");
const email = ref("");
const name = ref("");
const address = ref("");

const nextStep = () => {
  if (
    contactNumber.value.length == 0 ||
    email.value.length == 0 ||
    name.value.length == 0 ||
    address.value.length == 0
  ) {
    Swal.fire({
      title: "Empty Input(s)!",
      text: "Please fil up the form",
      confirmButtonText: "OK",
    });
  } else {
    emit("next", { contactNumber: contactNumber.value, email: email.value });
  }
};
</script>

<template>
  <div class="step-container border rounded shadow-lg py-6 my-3">
    <h2 class="text-xl font-bold">Billing Information</h2>
    <form class="form" @submit.prevent="nextStep">
      <div class="form-group">
        <label for="contactNumber">Name:</label>
        <input
          type="text"
          placeholder="Enter First Name"
          id="firstname"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="contactNumber">Phone:</label>
        <input
          type="text"
          placeholder="Enter Contact"
          id="contactNumber"
          v-model="contactNumber"
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="contactNumber">Billing Address:</label>
        <input
          type="text"
          placeholder="Enter Address"
          id="lastname"
          v-model="address"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="next-button">Next</button>
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
