import { ref, reactive } from "vue";
import router from "../router/router";
import { cart } from "./cart";
import Swal from "sweetalert2";
const authStore = reactive({
  isAuthenticated: localStorage.getItem("auth") == 1,
  user: JSON.parse(localStorage.getItem("user")),
  authenticate(username, password) {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        if (res.email) {
          authStore.isAuthenticated = true;
          authStore.user = res;
          localStorage.setItem("auth", 1);
          localStorage.setItem("user", JSON.stringify(res));
          router.push("/");
        } else {
          Swal.fire({
            title: res.message,
            text: "Please try again",
            confirmButtonText: "OK",
          });
        }
      });
  },
  logout() {
    authStore.isAuthenticated = false;
    authStore.user = {};
    localStorage.setItem("auth", 0);
    localStorage.setItem("user", "{}");
    cart.items = {};
    cart.saveCartInLocalStorage();
    router.push("/login");
  },
});

export { authStore };
