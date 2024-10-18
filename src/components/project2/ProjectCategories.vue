<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-8">
      <p class="font-bold text-2xl lg:px-0 px-6">Kategorien – Filter</p>
      <div class="grid lg:grid-cols-6 grid-cols-2 gap-8 my-6 lg:mx-0 mx-6">
        <div
          class="group bg-gray-50 rounded-xl flex flex-col justify-center items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50"
        >
          <IconCalendar class="text-gray-400 h-10 group-hover:text-white"></IconCalendar>
          <p class="text-gray-800 font-medium py-4 group-hover:text-white">Neuste</p>
        </div>
        <div
          class="group bg-gray-50 rounded-xl flex flex-col justify-center items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50"
        >
          <IconBook class="text-gray-400 h-10 group-hover:text-white"></IconBook>
          <p class="text-gray-800 font-medium py-4 group-hover:text-white">Thesis</p>
        </div>
        <div
          class="group bg-gray-50 rounded-xl flex flex-col justify-center items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50"
        >
          <IconFolder class="text-gray-400 h-10 group-hover:text-white"></IconFolder>
          <p class="text-gray-800 font-medium py-4 group-hover:text-white">IT-Projekt</p>
        </div>
        <div
          class="group bg-gray-50 rounded-xl flex flex-col justify-center items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50"
        >
          <IconLightbulb class="text-gray-400 h-10 group-hover:text-white"></IconLightbulb>
          <p class="text-gray-800 font-medium py-4 group-hover:text-white">Idee</p>
        </div>
        <div v-for="i in 2" :key="i">
          <div
            class="group bg-gray-50 rounded-xl flex flex-col justify-center items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50"
          >
            <IconOther class="text-gray-400 h-10 group-hover:text-white"></IconOther>
            <p class="text-gray-800 font-medium py-4 group-hover:text-white">Other</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCalendar from '@/components/project/details/icon/IconCalendar.vue'
import IconLightbulb from '@/components/project2/icons/IconLightbulb.vue'
import IconFolder from '@/components/home/icons/IconFolder.vue'
import IconBook from '@/components/project2/icons/IconBook.vue'
import IconOther from '@/components/project2/icons/IconOther.vue'

export default {
  name: 'ProjectCategories',
  components: { IconOther, IconBook, IconFolder, IconLightbulb, IconCalendar }
}
</script>

<style scoped></style>
