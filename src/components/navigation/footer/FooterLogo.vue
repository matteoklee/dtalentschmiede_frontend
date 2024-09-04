<template>
  <RouterLink to="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
    <img src="/src/assets/Dataport%20Logo.png" class="mr-2 h-10" alt="Dataport Logo" />
    <FooterLogoTitle></FooterLogoTitle>
  </RouterLink>
</template>

<script>
import FooterLogoTitle from "@/components/navigation/footer/FooterLogoTitle.vue";

export default {
  name: "FooterLogo",
  components: {FooterLogoTitle}
}
</script>

<style scoped>

</style>
