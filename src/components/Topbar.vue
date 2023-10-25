<template>
  <header class="topbar">
    <font-awesome-icon
      class="cursor-pointer"
      icon="fa-solid fa-bars"
      @click="toggleSidebar()"
    />
    <div class="brand">
      <h2 class="text-2xl">E-Wardrobe Store</h2>
    </div>
    <div class="user-info"></div>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits();

const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>

<style scoped>
.topbar {
  background-color: #310a0a;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand h2 {
  margin: 0;
}
</style>
