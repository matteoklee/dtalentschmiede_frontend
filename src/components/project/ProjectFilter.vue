<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto pb-8">
      <p class="font-bold text-2xl lg:px-0 px-6">Filtern und suchen nach</p>
      <div class="flex lg:flex-row flex-col justify-start mt-6 lg:mx-0 mx-6">

        <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center shadow-lg"
                type="button">
          Filter nach Fachlichen Fähigkeiten
          <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow">
          <h6 class="mb-3 text-sm font-medium text-gray-900">
            Fachliche Fähigkeiten
          </h6>
          <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li v-for="(filter, index) in softSkills" :key="index" class="flex items-center">
              <input :id="filter.id" type="checkbox" value=""
                     class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0" />
              <label :for="filter.id" class="ml-2 text-sm font-medium text-gray-900">
                {{ filter.name }}
              </label>
            </li>
          </ul>
        </div>


        <button id="dropdownDefault2" data-dropdown-toggle="dropdown2"
                class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button">
          Filter nach Technischen Fähigkeiten
          <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown2" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow">
          <h6 class="mb-3 text-sm font-medium text-gray-900">
            Technische Fähigkeiten
          </h6>
          <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault2">
            <li v-for="(filter, index) in hardSkills" :key="index" class="flex items-center">
              <input :id="filter.id" type="checkbox" value=""
                     class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0" />
              <label :for="filter.id" class="ml-2 text-sm font-medium text-gray-900">
                {{ filter.name }}
              </label>
            </li>
          </ul>
        </div>


        <button id="dropdownDefault3" data-dropdown-toggle="dropdown3"
                class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button">
          Filter nach Technologien
          <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown3" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow">
          <h6 class="mb-3 text-sm font-medium text-gray-900">
            Technologien
          </h6>
          <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault3">
            <li v-for="(filter, index) in technologies" :key="index" class="flex items-center">
              <input :id="filter.id" type="checkbox" value=""
                     class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0" />
              <label :for="filter.id" class="ml-2 text-sm font-medium text-gray-900">
                {{ filter.name }}
              </label>
            </li>
          </ul>
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
import {initFlowbite} from "flowbite";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconClose from "@/components/icons/IconClose.vue";

import {useProjectStore} from "@/stores/projectStore.js";
export default {
  name: "ProjectFilter",
  setup() {
    const projectStore = useProjectStore();
    projectStore.fetchProjects();
    return {
      projectStore
    };
  },
  components: {IconClose, IconSearch},
  data() {
    return {
      searchQuery: '',
      technologies: [
        { id: 'java', name: 'Java' },
        { id: 'vue', name: 'Vue.js' },
        { id: 'vuetify', name: 'Vuetify' },
        { id: 'spring', name: 'Spring Boot' },
        { id: 'js', name: 'JavaScript' },
        { id: 'react', name: 'React' },
        { id: 'node', name: 'Node.js' },
      ],
      softSkills: [
        { id: 'requirements_analysis', name: 'Anforderungsanalyse' },
        { id: 'project_management', name: 'Projektmanagement' },
        { id: 'client_interaction', name: 'Kundenkontakt' },
        { id: 'problem_solving', name: 'Problemlösung' },
        { id: 'communication_teamwork', name: 'Kommunikation und Teamarbeit' },
        { id: 'time_management', name: 'Zeitmanagement' }
      ],
      hardSkills: [
        { id: 'software_architecture', name: 'Softwarearchitektur' },
        { id: 'testing_qa', name: 'Testen und Qualitätssicherung' },
        { id: 'version_control', name: 'Versionsverwaltung' },
        { id: 'documentation', name: 'Dokumentation' },
        { id: 'database_management', name: 'Datenbankverwaltung' },
        { id: 'agile_methods', name: 'Agile Methoden' },
        { id: 'programming', name: 'Programmierung' },
        { id: 'cybersecurity', name: 'Cybersecurity' },
        { id: 'devops', name: 'DevOps und CI/CD' }
      ],
    }
  },
  methods: {
    searchProject() {
      this.projectStore.setSearchQuery(this.searchQuery)
    },
    clearSearch() {
      this.searchQuery = ''
      this.projectStore.setSearchQuery('');
    }
  },
  mounted() {
    initFlowbite();
  }
}
</script>

<style scoped>

</style>
