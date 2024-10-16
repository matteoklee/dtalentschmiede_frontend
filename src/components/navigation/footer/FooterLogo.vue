<template>
  <RouterLink to="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900">
    <img src="/src/assets/1200px-Dataport_Logo.svg 1.png" class="mr-4 h-10" alt="Dataport Logo" />
    <FooterLogoTitle></FooterLogoTitle>
  </RouterLink>
</template>

<script>
import FooterLogoTitle from '@/components/navigation/footer/FooterLogoTitle.vue'

export default {
  name: 'FooterLogo',
  components: { FooterLogoTitle }
}
</script>

<style scoped></style>
