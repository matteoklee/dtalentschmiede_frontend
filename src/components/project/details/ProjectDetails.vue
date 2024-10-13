<template>
  <div class="flex lg:flex-row flex-col">
    <div class="inline-flex lg:justify-center items-center mr-8 mb-2">
      <div class="bg-blue-200 px-2 py-1.5 rounded-lg mr-2">
        <IconLocation class="w-4 text-gray-800"></IconLocation>
      </div>
      Magdeburg
    </div>
    <div class="inline-flex lg:justify-center items-center mr-8 mb-2">
      <div class="bg-blue-200 px-2 py-1.5 rounded-lg mr-2">
        <IconHourglass class="w-4 text-gray-800"></IconHourglass>
      </div>
      zum 01.12.2025
    </div>
    <div class="inline-flex lg:justify-center items-center mr-8 mb-2">
      <div class="bg-blue-200 px-2 py-1.5 rounded-lg mr-2">
        <IconCalendar class="w-4 text-gray-800"></IconCalendar>
      </div>
      vor 2 Tagen
    </div>
  </div>
</template>

<script>
import IconLocation from '@/components/profile/icons/IconLocation.vue'
import IconCalendar from '@/components/project/details/icon/IconCalendar.vue'
import IconHourglass from '@/components/project/details/icon/IconHourglass.vue'

export default {
  name: 'ProjectDetails',
  components: { IconHourglass, IconCalendar, IconLocation }
}
</script>

<style scoped></style>
