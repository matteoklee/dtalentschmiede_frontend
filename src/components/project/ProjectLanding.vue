<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto gap-6">
    <div class="flex flex-col justify-center lg:p-0 p-6">
      <h1 class="text-5xl font-bold text-left py-4">
        Finde dein nächstes <span class="text-primary-700">Projekt</span> oder die
        <span class="text-primary-700">Idee</span> dafür.
      </h1>
      <p class="font-normal text-lg py-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>

      <div
        class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-600 hover:scale-105 duration-300"
      >
        <div class="flex items-center space-x-2 w-full relative mr-2">
          <IconSearch class="h-5 text-gray-400"></IconSearch>
          <input
            v-model="searchQuery"
            @input="searchProject"
            type="text"
            id="projectSearch"
            placeholder="Suche nach Titel und Beschreibung ..."
            required
            class="border-0 text-lg w-full outline-none focus:ring-0 placeholder-gray-300 pr-6"
          />
          <button type="button" @click="clear" class="absolute right-0">
            <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
          </button>
        </div>
        <a
          type="button"
          href="#projects"
          class="bg-primary-600 shadow-lg shadow-primary-600/50 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition"
          >Suchen</a
        >
      </div>

      <p class="text-gray-400 font-normal text-md py-4">
        Example:
        <span class="border px-3 py-1 mx-2 rounded-md">Marktpreise</span>
        <span class="border px-3 py-1 mx-2 rounded-md">App</span>
        <span class="border px-3 py-1 mx-2 rounded-md">Plattform</span>
      </p>
    </div>
    <div class="flex flex-row">
      <img src="@/assets/img_2.png" />
    </div>
  </div>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue';
import IconSearch from '@/components/icons/IconSearch.vue';

import { useProjectStore } from '@/stores/projectStore.js';
export default {
  name: 'ProjectLanding',
  setup() {
    const projectStore = useProjectStore();
    projectStore.fetchProjects();
    return {
      projectStore
    };
  },
  components: { IconSearch, IconClose },
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    searchProject() {
      this.projectStore.setSearchQuery(this.searchQuery);
    },
    clear() {
      this.searchQuery = '';
      this.projectStore.setSearchQuery('');
    }
  }
};
</script>

<style scoped></style>
