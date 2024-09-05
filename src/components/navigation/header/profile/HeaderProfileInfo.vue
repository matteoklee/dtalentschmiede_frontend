<template>
  <div class="inline-flex">
    <p class="hover:text-primary-600 hover:underline mr-3">Matteo Kleemann</p>
    <RouterLink to="/login" class="">
      <IconUserCircle
        class="h-6 w-6 hover:scale-105 text-gray-800 hover:text-primary-700"
      ></IconUserCircle>
    </RouterLink>
  </div>
</template>

<script>
import IconUserCircle from '@/components/navigation/header/profile/icons/IconUserCircle.vue'

export default {
  name: 'HeaderProfileInfo',
  components: { IconUserCircle }
}
</script>

<style scoped></style>
