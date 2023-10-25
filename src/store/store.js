import { ref, reactive } from "vue";
import router from "../router/router";
import { cart } from "./cart";
import Swal from "sweetalert2";
const authStore = reactive({
  isAuthenticated: localStorage.getItem("auth") == 1,
  user: JSON.parse(localStorage.getItem("user")),
  users: JSON.parse(localStorage.getItem("users")),
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
        } else if (authStore.users.length > 0) {
          const user = authStore.users.find(
            (user) => user.email === username && user.password === password
          );

          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("auth", 1);
            router.push("/");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            throw new Error("Invalid credentials");
          }
        } else {
          Swal.fire({
            title: res.message,
            text: "Please try again",
            confirmButtonText: "OK",
          });
        }
      });
  },
  registerUser({ email, password, usertype }) {
    if (authStore.users.some((user) => user.email === email)) {
      throw new Error("Email already exists");
    }

    authStore.users.push({ email, password, usertype });
    console.log("this.users", authStore.users);
    console.log("userType", usertype);
    localStorage.setItem("users", JSON.stringify(authStore.users));
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
