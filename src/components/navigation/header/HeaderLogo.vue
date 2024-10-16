<template>
  <a href="/" class="flex items-center">
    <img
      src="/src/assets/1200px-Dataport_Logo.svg 1.png"
      class="mr-4 h-6 lg:h-10"
      alt="Dataport Logo"
    />
    <HeaderTitle></HeaderTitle>
  </a>
</template>

<script>
import HeaderTitle from '@/components/navigation/header/HeaderTitle.vue'

export default {
  name: 'HeaderLogo',
  components: { HeaderTitle }
}
</script>

<style scoped></style>
