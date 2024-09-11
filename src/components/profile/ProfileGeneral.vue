<template>
  <div>
    <IconUserCircle class="w-14 h-14 p-2 text-gray-800"></IconUserCircle>
    <p class="text-lg px-2 font-bold">Matteo Kleemann</p>
  </div>
  <div class="px-2 pt-4">
    <div class="inline-flex items-center">
      <IconJob class="text-gray-900 w-3 h-3 mr-2"></IconJob>
      <span class="text-gray-500">Front-end Developer</span>
    </div>
  </div>
  <div class="p-2">
    <div class="inline-flex items-center">
      <IconLocation class="text-gray-900 w-3 h-3 mr-2"></IconLocation>
      <span class="text-gray-500">Halle (Saale), Sachsen-Anhalt</span>
    </div>
  </div>
  <div class="py-2 px-2">
    <p class="text-gray-500">E-Mail Adresse</p>
    <p class="font-medium">matteoachim.kleemann@dataport.de</p>
  </div>
  <div class="py-2 px-2">
    <p class="text-gray-500">Abteilung</p>
    <p class="font-medium">DS44</p>
    <p class="font-medium">Anwendungsentwicklung</p>
  </div>
  <div class="py-2 px-2">
    <p class="text-gray-500">Bewertung</p>
    <div class="flex items-center py-2">
      <div v-for="index in 5" :key="index" class="">
        <IconStar class="w-4 h-4 text-yellow-300 mr-1"></IconStar>
      </div>
    </div>
  </div>
</template>

<script>
import IconJob from '@/components/profile/icons/IconJob.vue'
import IconUserCircle from '@/components/navigation/header/profile/icons/IconUserCircle.vue'
import IconLocation from '@/components/profile/icons/IconLocation.vue'
import IconStar from '@/components/profile/icons/IconStar.vue'

export default {
  name: 'ProfileGeneral',
  components: { IconStar, IconLocation, IconUserCircle, IconJob }
}
</script>

<style scoped></style>
