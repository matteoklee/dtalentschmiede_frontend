<script setup>
import { RouterView } from 'vue-router'
import AppHeader from "@/components/navigation/AppHeader.vue";
import AppFooter from "@/components/navigation/AppFooter.vue";

</script>

<template>
  <div class="flex flex-col min-h-screen container mx-auto"> <!-- container h-screen mx-auto -->
    <header>
        <AppHeader></AppHeader>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="">
        <AppFooter></AppFooter>
    </footer>
  </div>

</template>

<style scoped>

</style>
