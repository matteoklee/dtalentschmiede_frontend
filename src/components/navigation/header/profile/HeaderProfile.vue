<template>
  <div class="flex items-center space-x-4 border-x border-gray-200 px-4">
    <HeaderProfileInfo :profile="profile"></HeaderProfileInfo>
    <!-- <HeaderProfileActions></HeaderProfileActions> -->
  </div>
</template>

<script>
import HeaderProfileInfo from '@/components/navigation/header/profile/HeaderProfileInfo.vue'

export default {
  name: 'HeaderProfile',
  components: { HeaderProfileInfo },
  props: ['profile']
}
</script>

<style scoped></style>
