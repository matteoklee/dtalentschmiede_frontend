<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-2 mx-auto max-w-screen-lg">
      <div class="flex flex-col justify-center p-2">
        <div class="text-4xl font-bold leading-none text-gray-900 lg:text-5xl text-justify">
          <Typer
            :text="['Entdecke ein Projekt\noder eine Idee in\nder dProjektbörse.']"
            :erase-on-complete="false"
            caret-animation="smooth"
            :repeat="infinity"
            :shuffle="false"
            :type-delay="70"
          />
        </div>
        <p class="text-lg font-normal lg:text-xl pt-8 text-justify">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et
        </p>
      </div>
      <div class="lg:block hidden flex flex-row justify-center items-center p-4">
        <img class="" src="@/assets/img_4.png" />
      </div>
    </div>
    <div class="col-span-2 py-4">
      <LandingActions></LandingActions>
    </div>
  </div>
</template>

<script>
import LandingActions from '@/components/home/LandingActions.vue'
import { Typer } from 'vue3-typer'
export default {
  name: 'LandingTitle',
  components: { LandingActions, Typer },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
