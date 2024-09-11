<template>
  <!-- Dropdown menu -->
  <div
    id="dropdownInformation"
    :class="[
      'z-10 hidden bg-white rounded-lg shadow w-auto',
      profile ? 'divide-y divide-gray-100' : ''
    ]"
  >
    <div v-if="profile">
      <div class="px-4 py-3 text-sm text-gray-900">
        <div>{{ profile.name }}</div>
        <div class="font-medium truncate">{{ profile.email }}</div>
      </div>
    </div>
    <div v-if="profile">
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownInformationButton"
      >
        <li>
          <RouterLink to="/profile" class="block px-4 py-2 hover:bg-gray-100">
            Profil
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/settings" class="block px-4 py-2 hover:bg-gray-100"
            >Einstellungen</RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="py-2">
      <div v-if="profile">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 inline-flex w-full"
        >
          <IconSignOut class="w-5 h-5 mr-2"></IconSignOut>
          <span>Abmelden</span>
        </a>
      </div>
      <div v-else>
        <RouterLink
          to="/login"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 inline-flex"
        >
          <IconSignIn class="w-5 h-5 mr-2"></IconSignIn>
          <span>Anmelden</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import IconSignOut from '@/components/navigation/header/profile/icons/IconSignOut.vue'
import IconSignIn from '@/components/navigation/header/profile/icons/IconSignIn.vue'

export default {
  name: 'HeaderProfileMenu',
  components: { IconSignIn, IconSignOut },
  props: ['profile']
}
</script>

<style scoped></style>
