<template>
  <div class="inline-flex">
    <!--
    <RouterLink to="/login" class="mr-2">
      <IconUserCircle class="h-6 w-6 hover:scale-105 text-gray-800 hover:text-primary-700"></IconUserCircle>
    </RouterLink>
    -->
    <RouterLink to="/login" class="">
      <IconSignOut class="h-6 w-6 hover:scale-105 text-gray-800 hover:text-primary-700"></IconSignOut>
    </RouterLink>
  </div>

  <!--
   <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
   <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
  -->

</template>

<script>
import IconUserCircle from "@/components/navigation/header/profile/icons/IconUserCircle.vue";
import IconSignOut from "@/components/navigation/header/profile/icons/IconSignOut.vue";

export default {
  name: "HeaderProfileActions",
  components: {IconSignOut, IconUserCircle}
}
</script>

<style scoped>

</style>
