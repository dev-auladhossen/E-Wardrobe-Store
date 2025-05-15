import { ref, reactive, computed } from "vue";
import { useToast } from "vue-toastification";

const checkoutCompleted = ref(false);
const orderNumber = ref("");
const estimatedDeliveryDate = ref("");

const toast = useToast();

const cart = reactive({
  items: {},
  totalCartItems: computed(() => {
    let total = 0;
    for (let id in cart.items) {
      total += cart.items[id].quantity;
    }
    return total;
  }),
  totalPrice: computed(() => {
    let total = 0;
    for (let id in cart.items) {
      total += cart.items[id].product.price * cart.items[id].quantity;
    }
    return parseFloat(total.toFixed(2));
  }),
  addItem(product) {
    if (this.items[product.id]) {
      this.items[product.id].quantity++;
    } else {
      this.items[product.id] = {
        product,
        quantity: 1,
      };
    }
    this.saveCartInLocalStorage();

    toast.success("Item added In the cart!", {
      timeout: 2000,
    });
  },
  removeItem(product) {
    delete this.items[product.id];
    this.saveCartInLocalStorage();
    toast.info("Item Removed", {
      timeout: 2000,
    });
  },
  emptyCart() {
    this.items = {};
    this.saveCartInLocalStorage();
  },
  saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  },
  getCartFromLocalStorage() {
    this.items = JSON.parse(localStorage.getItem("cart")) || {};
  },
  generateOrderNumber() {
    return Math.floor(Math.random() * 1000000);
  },
  calculateDeliveryDate() {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 3);
    return deliveryDate.toDateString();
  },
  proceedToCheckout() {
    this.simulateCheckout();
  },
  simulateCheckout() {
    setTimeout(() => {
      orderNumber.value = this.generateOrderNumber();
      estimatedDeliveryDate.value = this.calculateDeliveryDate();
    }, 1000);
  },
});
cart.getCartFromLocalStorage();
export { cart, orderNumber, estimatedDeliveryDate, checkoutCompleted };
