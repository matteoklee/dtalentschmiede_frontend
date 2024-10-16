<template>
  <div class="flex justify-center items-center">
    <div class="inline-flex">
      <!-- <p class="hover:text-primary-600 hover:underline mr-3">Matteo Kleemann</p> -->
      <a class="" id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation">
        <IconUserCircle
          class="h-6 w-6 hover:scale-105 text-gray-800 hover:text-primary-700"
        ></IconUserCircle>
      </a>
      <HeaderProfileMenu :profile="profile"></HeaderProfileMenu>
    </div>
  </div>
</template>

<script>
import HeaderProfileMenu from '@/components/navigation/header/profile/HeaderProfileMenu.vue'
import IconUserCircle from '@/components/navigation/header/profile/icons/IconUserCircle.vue'
import { initFlowbite } from 'flowbite'
export default {
  name: 'HeaderProfile',
  components: { IconUserCircle, HeaderProfileMenu },
  props: ['profile'],
  mounted() {
    initFlowbite()
  }
}
</script>

<style scoped></style>
