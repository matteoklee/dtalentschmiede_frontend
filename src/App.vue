<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/navigation/AppHeader.vue'
import AppFooter from '@/components/navigation/AppFooter.vue'
</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto flex flex-col min-h-screen">
      <!-- container h-screen mx-auto -->
      <header v-if="$route.meta.header === true">
        <AppHeader></AppHeader>
      </header>

      <main class="flex-1">
        <RouterView />
      </main>

      <footer v-if="$route.meta.footer === true">
        <AppFooter></AppFooter>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
