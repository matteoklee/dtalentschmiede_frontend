<template>
  <div class="flex lg:flex-row flex-col">
    <div class="inline-flex lg:justify-center items-center mr-8 mb-2 ml-1">
      <div class="bg-blue-200 px-2 py-2 rounded-lg mr-2">
        <IconStatus class="w-5 h-4 text-gray-800"></IconStatus>
      </div>
      <span class="">{{ getReadableProjectStatus(project.projectStatus) }}</span>
    </div>
    <div class="hidden inline-flex lg:justify-center items-center mr-8 mb-2">
      <div class="bg-blue-200 px-2 py-1.5 rounded-lg mr-2">
        <IconHourglass class="w-4 text-gray-800"></IconHourglass>
      </div>
      zum 01.12.2025
    </div>
    <div class="inline-flex lg:justify-center items-center mr-8 mb-2">
      <div class="bg-blue-200 px-2 py-2 rounded-lg mr-2">
        <IconCalendar class="w-4 h-4 text-gray-800"></IconCalendar>
      </div>
      <span class="">{{ formatDateWithTime(project.projectCreatedAt) }}</span>
    </div>
  </div>
</template>

<script>
import IconLocation from '@/components/icons/IconLocation.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconHourglass from '@/components/icons/IconHourglass.vue'

import {formatDateWithTime} from "@/utils/dateUtils.js";
import IconStatus from "@/components/icons/IconStatus.vue";
import {getReadableProjectStatus} from "@/utils/mappingUtils.js";
export default {
  name: 'ProjectDetails',
  props: ['project'],
  components: {IconStatus, IconHourglass, IconCalendar, IconLocation },
  methods: {
    getReadableProjectStatus,
    formatDateWithTime(dateString) {
      return formatDateWithTime(dateString);
    }
  }
}
</script>

<style scoped></style>
