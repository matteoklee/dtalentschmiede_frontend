<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto pb-8">
      <div class="flex lg:flex-row flex-col justify-between items-start">
        <p class="font-bold text-2xl lg:px-0 px-6">Filtern und suchen nach</p>
        <button @click="resetAllFilters" type="button" class="lg:mx-0 mx-6 lg:my-0 my-2 py-2.5 px-4 bg-gray-400 text-white rounded-lg hover:bg-gray-600">Zurücksetzen</button>
      </div>
      <div class="flex lg:flex-row flex-col justify-start mt-6 lg:mx-0 mx-6">
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center shadow-lg"
          type="button"
        >
          Filter nach Fachlichen Fähigkeiten
          <svg
            class="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden min-w-56 p-3 bg-white rounded-lg shadow">
          <h6 class="mb-3 text-sm font-medium text-gray-900">Fachliche Fähigkeiten</h6>
          <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li v-for="(filter, index) in softSkillStore.softSkills" :key="index" class="flex items-center">
              <input
                :id="filter.id"
                type="checkbox"
                :value="filter.softSkillValue"
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0"
                v-model="filteredSoftSkills"
              />
              <label :for="filter.id" class="ml-2 text-sm font-medium text-gray-900">
                {{ filter.softSkillName }}
              </label>
            </li>
          </ul>
          <div class="flex flex-row justify-between items-center">
            <button @click="resetFilteredSoftSkills" type="button" class="text-white rounded-lg bg-gray-400 px-4 py-1.5 mr-2 mt-2">
              Zurücksetzen
            </button>
            <button @click="filterSoftSkills" type="button" class="text-white rounded-lg bg-primary-600 px-4 py-1.5 mr-2 mt-2">
              Filtern
            </button>
          </div>
        </div>

        <button
          id="dropdownDefault2"
          data-dropdown-toggle="dropdown2"
          class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Filter nach Technischen Fähigkeiten
          <svg
            class="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown2" class="z-10 hidden min-w-56 p-3 bg-white rounded-lg shadow">
          <h6 class="mb-3 text-sm font-medium text-gray-900">Technische Fähigkeiten</h6>
          <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault2">
            <li v-for="(filter, index) in hardSkillStore.hardSkills" :key="index" class="flex items-center">
              <input
                :id="filter.id"
                type="checkbox"
                :value="filter.hardSkillValue"
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0"
                v-model="filteredHardSkills"
              />
              <label :for="filter.id" class="ml-2 text-sm font-medium text-gray-900">
                {{ filter.hardSkillName }}
              </label>
            </li>
          </ul>
          <div class="flex flex-row justify-between items-center">
            <button @click="resetFilteredHardSkills" type="button" class="text-white rounded-lg bg-gray-400 px-4 py-1.5 mr-2 mt-2">
              Zurücksetzen
            </button>
            <button @click="filterHardSkills" type="button" class="text-white rounded-lg bg-primary-600 px-4 py-1.5 mr-2 mt-2">
              Filtern
            </button>
          </div>
        </div>

        <button
          id="dropdownDefault3"
          data-dropdown-toggle="dropdown3"
          class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Filter nach Technologien
          <svg
            class="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown3" class="z-10 hidden min-w-56 p-3 bg-white rounded-lg shadow">
          <h6 class="mb-3 text-sm font-medium text-gray-900">Technologien</h6>
          <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault3">
            <li v-for="(filter, index) in technologyStore.technologies" :key="index" class="flex items-center">
              <!-- @change="filterTechnologies" -->
              <input
                :id="filter.id"
                type="checkbox"
                :value="filter.technologyValue"
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0"
                v-model="filteredTechnologies"
              />
              <label :for="filter.id" class="ml-2 text-sm font-medium text-gray-900">
                {{ filter.technologyName }}
              </label>
            </li>
          </ul>
          <div class="flex flex-row justify-between items-center">
            <button @click="resetFilteredTechnologies" type="button" class="text-white rounded-lg bg-gray-400 px-4 py-1.5 mr-2 mt-2">
              Zurücksetzen
            </button>
            <button
                    @click="filterTechnologies" type="button" class="text-white rounded-lg bg-primary-600 px-4 py-1.5 mr-2 mt-2">
              Filtern
            </button>
          </div>

        </div>

        <div
          class="flex flex-grow items-center space-x-2 bg-white py-1.5 px-4 rounded-lg shadow-md text-gray-600 border"
        >
          <div class="flex items-center space-x-2 w-full relative mr-2">
            <IconSearch class="h-5 text-gray-400"></IconSearch>
            <!-- v-model="projectStore.searchQuery" -->
            <input
              v-model="searchQuery"
              @input="searchProject"
              type="text"
              id="projectSearch"
              placeholder="Suche nach Titel, Technologie, ..."
              required
              class="border-0 w-full outline-none focus:ring-0 placeholder-gray-300 pr-6"
            />
            <button type="button" @click="clearSearch" class="absolute right-0">
              <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconClose from '@/components/icons/IconClose.vue';

import { useProjectStore } from '@/stores/projectStore.js';
import {useTechnologyStore} from "@/stores/technologyStore.js";
import {useHardSkillStore} from "@/stores/hardSkillStore.js";
import {useSoftSkillStore} from "@/stores/softSkillStore.js";
import {useProjectTypeStore} from "@/stores/projectTypeStore.js";
export default {
  name: 'ProjectFilter',
  setup() {
    const projectStore = useProjectStore();
    projectStore.fetchProjects();
    const technologyStore = useTechnologyStore();
    technologyStore.fetchTechnologies();
    const hardSkillStore = useHardSkillStore();
    hardSkillStore.fetchHardSkills();
    const softSkillStore = useSoftSkillStore();
    softSkillStore.fetchSoftSkills();
    const projectTypeStore = useProjectTypeStore();
    projectTypeStore.fetchProjectTypes();
    return {
      projectStore,
      technologyStore,
      hardSkillStore,
      softSkillStore,
      projectTypeStore
    };
  },
  components: { IconClose, IconSearch },
  data() {
    return {
      searchQuery: '',
      filteredTechnologies: [],
      filteredHardSkills: [],
      filteredSoftSkills: []
    };
  },
  methods: {
    searchProject() {
      this.projectStore.setSearchQuery(this.searchQuery);
    },
    filterTechnologies() {
      this.projectStore.setFilteredTechnologies(this.filteredTechnologies);
    },
    filterSoftSkills() {
      this.projectStore.setFilteredSoftSkills(this.filteredSoftSkills);
    },
    filterHardSkills() {
      this.projectStore.setFilteredHardSkills(this.filteredHardSkills);
    },
    resetFilteredTechnologies() {
      this.filteredTechnologies = [];
      this.filterTechnologies();
    },
    resetFilteredHardSkills() {
      this.filteredHardSkills = [];
      this.filterHardSkills();
    },
    resetFilteredSoftSkills() {
      this.filteredSoftSkills = [];
      this.filterSoftSkills();
    },
    resetAllFilters() {
      this.clearSearch();
      this.resetFilteredTechnologies();
      this.resetFilteredHardSkills();
      this.resetFilteredSoftSkills();
    },
    clearSearch() {
      this.searchQuery = '';
      this.projectStore.setSearchQuery('');
    }
  },
  mounted() {
    initFlowbite();
  }
};
</script>

<style scoped></style>
