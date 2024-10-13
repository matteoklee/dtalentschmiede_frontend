<template>
  <div class="pt-16 pb-8 max-w-screen-md mx-auto text-center">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
    >
      Finde ein IT-Projekt in der
      <RouterLink to="/projects" class="text-primary-600 hover:underline hover:underline-offset-8"
        >dTalentschmiede</RouterLink
      >.
    </h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl">
      Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
      long-term value and drive economic growth.
    </p>
  </div>
  <LandingActions></LandingActions>
</template>

<script>
import LandingActions from '@/components/home/LandingActions.vue'

export default {
  name: 'LandingTitle',
  components: { LandingActions }
}
</script>

<style scoped></style>
