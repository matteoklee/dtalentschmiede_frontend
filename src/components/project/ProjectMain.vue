<template>
  <div class="bg-white rounded-md border border m-4">
    <!--
    <ProjectViewTitle></ProjectViewTitle>
    -->
    <div class="grid grid-cols-2">
      <div class="lg:col-span-1 col-span-2">
        <ProjectSearch @searchProject="searchProject"></ProjectSearch>
      </div>
      <div class="flex flex-col justify-end items-center lg:col-span-1 col-span-2 mx-4">
        <button class="m-4 p-4 bg-primary-700 rounded-lg text-white font-medium w-full">
          Neues Projekt/Idee eintragen
        </button>
      </div>
      <div class="">
        <p class="font-medium text-lg mx-5 my-2">220 Projekte</p>
      </div>
    </div>
  </div>
  <div class="my-6 flex lg:flex-row flex-col">
    <!-- lg:w-1/3 w-full border-r-2 border-gray-200 lg:max-h-[800px] max-h-[300px] overflow-auto -->
    <div
      class="lg:w-1/4 w-full overflow-auto lg:max-h-full max-h-[300px] overflow-auto border-b-4 lg:border-0"
    >
      <ProjectList :searchQuery="searchQuery" @selectProject="selectProject"></ProjectList>
    </div>
    <div class="lg:w-3/4 w-full p-4 max-h-[1000px] overflow-auto lg:mt-0 mt-8">
      <ProjectInfo :project="selectedProject" @closeProject="closeProject"></ProjectInfo>
    </div>
  </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList.vue'
import ProjectInfo from '@/components/project/ProjectInfo.vue'
import ProjectSearch from '@/components/project/ProjectSearch.vue'

export default {
  name: 'ProjectMain',
  components: { ProjectSearch, ProjectInfo, ProjectList },
  data() {
    return {
      selectedProject: null,
      searchQuery: ''
    }
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project
    },
    closeProject() {
      this.selectedProject = null
    },
    searchProject(value) {
      this.searchQuery = value
      console.log('Search: ' + value)
    }
  }
}
</script>

<style scoped></style>
