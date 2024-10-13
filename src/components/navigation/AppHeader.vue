<template>
  <header>
    <nav class="px-4 lg:px-6 py-4 mx-4 mt-0 mb-4 border-x border-b">
      <div class="flex flex-wrap items-center">
        <HeaderLogo></HeaderLogo>

        <div class="flex items-center ml-auto lg:order-2">
          <HeaderProfile :profile="profile"></HeaderProfile>
          <HeaderMobileNav></HeaderMobileNav>
        </div>

        <div
          class="hidden justify-between items-start w-full lg:ml-12 lg:flex lg:w-auto lg:order-1 border-x border-gray-200 px-4"
          id="mobile-menu-2"
        >
          <HeaderNav></HeaderNav>
        </div>
      </div>
    </nav>
    <BreadcrumbNav></BreadcrumbNav>
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
