<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
      <div class="flex flex-col justify-center items-center p-4 max-w-screen-md mx-auto">
        <h1 class="text-4xl font-bold leading-none text-gray-900 lg:text-6xl">
          Finde ein IT-Projekt in der
          <RouterLink
            to="/projects"
            class="text-primary-700 hover:underline hover:underline-offset-8"
            >dProjektbörse</RouterLink
          >.
        </h1>
        <p class="text-lg font-normal lg:text-xl pt-8">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>
      </div>
      <div class="lg:block hidden flex flex-row justify-center items-center p-4">
        <img src="@/assets/img_4.png" />
      </div>
    </div>
    <div class="col-span-2 py-4">
      <LandingActions></LandingActions>
    </div>
  </div>
</template>

<script>
import LandingActions from '@/components/home/LandingActions.vue'

export default {
  name: 'LandingTitle',
  components: { LandingActions }
}
</script>

<style scoped></style>
