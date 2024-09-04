<template>
  <a href="/" class="flex items-center">
    <img src="/src/assets/Dataport%20Logo.png" class="mr-3 h-6 sm:h-9" alt="Dataport Logo" />
    <HeaderTitle></HeaderTitle>
  </a>
</template>

<script>
import HeaderTitle from "@/components/navigation/header/HeaderTitle.vue";

export default {
  name: "HeaderLogo",
  components: {HeaderTitle}
}
</script>

<style scoped>

</style>
