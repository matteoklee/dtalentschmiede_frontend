<template>
  <header>
    <nav class="px-4 lg:px-6 pt-4 pb-2 bg-transparent max-w-screen-xl mx-auto my-4 relative">
      <div class="flex flex-wrap items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <HeaderLogo></HeaderLogo>
        </div>

        <!-- Navigationsleiste in der Mitte -->
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <HeaderNav></HeaderNav>
        </div>

        <!-- Profil und mobile Navigation -->
        <div class="flex items-center ml-auto lg:order-2">
          <HeaderProfile :profile="profile"></HeaderProfile>
          <HeaderMobileNav></HeaderMobileNav>
        </div>
      </div>
    </nav>
    <div class="max-w-screen-xl mx-auto">
      <BreadcrumbNav></BreadcrumbNav>
    </div>
  </header>
</template>

<script>
import HeaderLogo from '@/components/navigation/header/HeaderLogo.vue'
import HeaderNav from '@/components/navigation/header/HeaderNav.vue'
import HeaderProfile from '@/components/navigation/header/profile/HeaderProfile.vue'
import HeaderMobileNav from '@/components/navigation/header/HeaderMobileNav.vue'
import BreadcrumbNav from '@/components/navigation/breadcrumb/BreadcrumbNav.vue'
export default {
  name: 'AppHeader',
  components: { BreadcrumbNav, HeaderMobileNav, HeaderProfile, HeaderNav, HeaderLogo },
  data() {
    return {
      profile: { id: 0, name: 'Matteo Kleemann', email: 'matteokleemann@dataport.de' },
      profile2: null
    }
  }
}
</script>

<style scoped></style>
