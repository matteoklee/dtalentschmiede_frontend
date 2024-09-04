<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <FooterLogo></FooterLogo>
      <FooterInfo></FooterInfo>
      <FooterNav></FooterNav>
      <FooterCopyright></FooterCopyright>
    </div>
  </footer>
</template>

<script>
import FooterLogo from "@/components/navigation/footer/FooterLogo.vue";
import FooterInfo from "@/components/navigation/footer/FooterInfo.vue";
import FooterNav from "@/components/navigation/footer/FooterNav.vue";
import FooterCopyright from "@/components/navigation/footer/FooterCopyright.vue";

export default {
  name: "AppFooter",
  components: {FooterCopyright, FooterNav, FooterInfo, FooterLogo}
}
</script>

<style scoped>

</style>
