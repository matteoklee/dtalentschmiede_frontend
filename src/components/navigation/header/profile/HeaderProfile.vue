<template>
  <div class="flex items-center space-x-4 border-x border-gray-200 px-4">
    <HeaderProfileInfo></HeaderProfileInfo>
    <HeaderProfileActions></HeaderProfileActions>
  </div>
</template>

<script>
import HeaderProfileActions from '@/components/navigation/header/profile/HeaderProfileActions.vue'
import HeaderProfileInfo from '@/components/navigation/header/profile/HeaderProfileInfo.vue'

export default {
  name: 'HeaderProfile',
  components: { HeaderProfileInfo, HeaderProfileActions }
}
</script>

<style scoped></style>
