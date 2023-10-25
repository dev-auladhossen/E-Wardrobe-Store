<script setup>
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";
const NavOpenClose = () => {
  let sideNav = document.getElementById("sideNav");

  if (isSidebarOpen) {
    sideNav.classList.add("side-nav-close");
  } else {
    sideNav.classList.remove("side-nav-close");
    sideNav.classList.add("side-nav-open");
  }
};
let isSidebarOpen = ref(true);
function toggleSidebar() {
  let sideNav = document.getElementById("sideNav");

  isSidebarOpen = !isSidebarOpen;
  console.log("emited", isSidebarOpen);

  if (!isSidebarOpen) {
    sideNav.classList.remove("side-nav-open");
    sideNav.classList.add("side-nav-close");
  } else {
    sideNav.classList.remove("side-nav-close");
    sideNav.classList.add("side-nav-open");
  }
}
</script>

<template>
  <div>
    <Topbar @toggle-sidebar="toggleSidebar" />

    <div id="content" class="content">
      <div id="sideNav">
        <Sidebar />
      </div>
      <div class="p-3 w-full">
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
}
.sidebar-open .content {
  margin-left: 200px; /* Adjust this value according to your sidebar width */
  transition: margin-left 0.3s;
}

.side-nav-open {
  display: block;
}
.side-nav-close {
  display: none;
}
</style>
