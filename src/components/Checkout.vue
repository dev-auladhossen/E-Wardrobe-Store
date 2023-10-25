<template>
  <Layout>
    <div v-if="!checkoutCompleted && cart.totalCartItems > 0" class="bg-white">
      <h1 class="text-4xl font-bold my-4">Checkout</h1>
      <div class="font-bold my-6 text-gray-400">
        <span :class="{ 'text-teal-500': contactInfoCompleted }">
          1.BILLING INFO /</span
        >
        <span :class="{ 'text-teal-500': shippingInfoCompleted }">
          2.SHIPPING /</span
        >
        <span :class="{ 'text-teal-500': orderConfirmCompleted }">
          3.ORDER INFO /</span
        >
        <span :class="{ 'text-teal-500': paymentInfoCompleted }"
          >4.PAYMENT</span
        >
      </div>
      <div v-if="!contactInfoCompleted">
        <ContactInfo @next="contactInfo" />
      </div>
      <div v-if="contactInfoCompleted && !shippingInfoCompleted">
        <ShippingInfo
          @previousOfShipping="previousOfShipping"
          @shippingInfoSubmitted="shippingInfoSubmitted"
        />
      </div>

      <div
        v-if="
          contactInfoCompleted &&
          shippingInfoCompleted &&
          !orderConfirmCompleted
        "
      >
        <OrderSummaryInfo
          @orderSubmitted="orderSubmitted"
          @cancelOrder="cancelOrder"
        />
      </div>

      <div
        v-if="
          contactInfoCompleted &&
          shippingInfoCompleted &&
          orderConfirmCompleted &&
          !paymentInfoCompleted
        "
      >
        <PaymentInfo
          @previousOfPayment="previousOfPayment"
          @payment="payment"
        />
      </div>
    </div>
    <div v-else class="bg-slate-100 h-[300px] flex flex-col justify-center">
      <h1 class="text-3xl font-[700] font-mon text-center pt-8 mb-4">
        Your cart is empty!
      </h1>
      <a href="/products">Add Your Products to Cart.</a>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from "vue";
import Layout from "../components/Layout.vue";
import ContactInfo from "../components/ContactInfo.vue";
import PaymentInfo from "../components/PaymentInfo.vue";
import ShippingInfo from "../components/ShippingInfo.vue";
import OrderSummaryInfo from "../components/OrderSummaryInfo.vue";
import Swal from "sweetalert2";
import router from "../router/router";

import {
  cart,
  orderNumber,
  estimatedDeliveryDate,
  checkoutCompleted,
} from "../store/cart";

const contactInfoCompleted = ref(false);
const shippingInfoCompleted = ref(false);
const orderConfirmCompleted = ref(false);
const paymentInfoCompleted = ref(false);

const contactInfo = (data) => {
  if (data.contactNumber.length > 0 && data.email.length > 0) {
    contactInfoCompleted.value = true;
  }
};

const shippingInfoSubmitted = (data) => {
  if (data.shippingAddress.length > 0 && data.shippingMethod.length > 0) {
    shippingInfoCompleted.value = true;
    cart.proceedToCheckout();
  }
};
const orderSubmitted = () => {
  orderConfirmCompleted.value = true;
};
const cancelOrder = (data) => {
  router.push("/cart");
};
const previousOfShipping = () => {
  contactInfoCompleted.value = false;
};
const previousOfPayment = (data) => {
  orderConfirmCompleted.value = false;
};
const payment = (data) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  let newOrder = {
    ...data,
    orderNumber: orderNumber.value,
    deliveryDate: estimatedDeliveryDate.value,
  };
  orders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(orders));

  paymentInfoCompleted.value = true;

  Swal.fire({
    icon: "success",
    title: "Payment Done!",
    text: "Your Order Placed Successfully!",
    footer: '<a href="/products">Want to shop more product?</a>',
  }).then((result) => {
    if (result.isConfirmed) {
      router.push("/orders");
    }
  });
};
</script>

<style scoped></style>
