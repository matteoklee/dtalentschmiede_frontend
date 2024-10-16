<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-8">
      <p class="font-bold text-2xl lg:px-0 px-6">Kategorien</p>
      <div class="grid lg:grid-cols-6 grid-cols-2 gap-8 my-6 lg:mx-0 mx-6">
        <div v-for="i in 6" :key="i">
          <div
            class="group bg-gray-50 rounded-xl flex flex-col justify-center items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50"
          >
            <IconCalendar class="text-gray-400 h-10 group-hover:text-white"></IconCalendar>
            <p class="text-gray-800 font-medium py-4 group-hover:text-white">Design</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCalendar from '@/components/project/details/icon/IconCalendar.vue'

export default {
  name: 'ProjectCategories',
  components: { IconCalendar }
}
</script>

<style scoped></style>
