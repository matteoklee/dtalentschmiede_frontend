<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-8 pb-4">
      <p class="font-bold text-2xl lg:px-0 px-6">Sortieren nach</p>
      <div class="grid xl:grid-cols-8 lg:grid-cols-6 grid-cols-3 md:grid-cols-4 xl:gap-4 gap-2 my-6 lg:mx-0 mx-6">
        <div
          class="group bg-gray-50 rounded-xl flex flex-col justify-center py-2 items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50 hover:cursor-pointer"
          @click="sortBy('createdAt')"
        >
          <IconCalendar class="text-gray-400 h-10 group-hover:text-white"></IconCalendar>
          <p class="text-gray-800 font-medium pt-4 group-hover:text-white text-center">Neuste</p>
        </div>
        <div
            class="group bg-gray-50 rounded-xl flex flex-col justify-center py-2 items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50 hover:cursor-pointer"
            @click="sortBy('updatedAt')"
        >
          <IconPencil class="text-gray-400 h-10 group-hover:text-white"></IconPencil>
          <p class="text-gray-800 font-medium pt-4 group-hover:text-white text-center">Zuletzt bearbeitet</p>
        </div>
        <div
          class="hidden group bg-gray-50 rounded-xl flex flex-col justify-center pb-2 items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50 hover:cursor-pointer"
          @click="filterProjectType"
        >
          <IconBook class="text-gray-400 h-10 group-hover:text-white"></IconBook>
          <p class="text-gray-800 font-medium pt-4 group-hover:text-white text-center">Thesis</p>
        </div>
        <div
          class="hidden group bg-gray-50 rounded-xl flex flex-col justify-center py-2 items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50 hover:cursor-pointer"
          @click="filterProjectType"
        >
          <IconFolder class="text-gray-400 h-10 group-hover:text-white"></IconFolder>
          <p class="text-gray-800 font-medium pt-4 group-hover:text-white text-center">IT-Projekt</p>
        </div>
        <div
          class="hidden group bg-gray-50 rounded-xl flex flex-col justify-center py-2 items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50 hover:cursor-pointer"
          @click="filterProjectType"
        >
          <IconLightbulb class="text-gray-400 h-10 group-hover:text-white"></IconLightbulb>
          <p class="text-gray-800 font-medium pt-4 group-hover:text-white text-center">Idee</p>
        </div>
        <div class="" v-for="type in projectTypeStore.projectTypes" :key="type.projectTypeId" @click="filterProjectType(type.projectTypeValue)">
          <div
            class="group bg-gray-50 rounded-xl flex flex-col justify-center py-2 items-center aspect-square hover:scale-105 hover:bg-primary-600 duration-300 transition-all shadow-lg hover:shadow-primary-600/50 hover:cursor-pointer"
          >
            <component :is="getProjectTypeIcon(type.projectTypeValue)" class="text-gray-400 h-10 group-hover:text-white"></component>
            <p class="text-gray-800 font-medium pt-4 group-hover:text-white text-center">{{ type.projectTypeName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCalendar from '@/components/icons/IconCalendar.vue';
import IconLightbulb from '@/components/icons/IconLightbulb.vue';
import IconFolder from '@/components/home/icons/IconFolder.vue';
import IconBook from '@/components/icons/IconBook.vue';
import IconOther from '@/components/icons/IconOther.vue';
import IconPencil from "@/components/icons/IconPencil.vue";

import {useProjectStore} from "@/stores/projectStore.js";
import {useProjectTypeStore} from "@/stores/projectTypeStore.js";
import {getProjectTypeIcon} from "@/utils/iconUtil.js";

export default {
  name: 'ProjectSorting',
  components: {IconPencil, IconOther, IconBook, IconFolder, IconLightbulb, IconCalendar },
  setup() {
    const projectStore = useProjectStore();
    const projectTypeStore = useProjectTypeStore();
    projectTypeStore.fetchProjectTypes();
    return {
      projectStore,
      projectTypeStore
    }
  },
  methods: {
    getProjectTypeIcon,
    sortBy(value) {
      this.projectStore.setSortBy(value);
    },
    filterProjectType(type) {
      this.projectStore.setFilteredProjectTypes(type);
    }
  }
};
</script>

<style scoped></style>
