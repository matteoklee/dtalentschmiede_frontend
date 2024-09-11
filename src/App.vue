<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/navigation/AppHeader.vue'
import AppFooter from '@/components/navigation/AppFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen container mx-auto">
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
</template>

<style scoped></style>
