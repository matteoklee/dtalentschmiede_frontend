<template>
  <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
    <li>
      <RouterLink to="/about" class="mr-4 hover:underline md:mr-6 ">About</RouterLink>
    </li>
    <li>
      <RouterLink to="/" class="mr-4 hover:underline md:mr-6">Impressum</RouterLink>
    </li>
    <li>
      <RouterLink to="/" class="mr-4 hover:underline md:mr-6 ">Datenschutzerklärung</RouterLink>
    </li>
    <li>
      <RouterLink to="/" class="mr-4 hover:underline md:mr-6">Login</RouterLink>
    </li>
    <li>
      <RouterLink to="/" class="mr-4 hover:underline md:mr-6">FAQ</RouterLink>
    </li>
    <li>
      <RouterLink to="/" class="mr-4 hover:underline md:mr-6">Kontakt</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterNav"
}
</script>

<style scoped>

</style>
