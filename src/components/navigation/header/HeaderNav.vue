<template>
  <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    <li>
      <RouterLink to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">
        Home
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">
        About
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">
        Projekte
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style scoped>

</style>
