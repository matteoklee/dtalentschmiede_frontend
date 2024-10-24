<template>
  <div class="">
    <ProjectLanding @searchProject="searchProject"></ProjectLanding>
  </div>
  <div>
    <ProjectCategories></ProjectCategories>
  </div>
  <div>
    <ProjectFilter @searchProject="searchProject"></ProjectFilter>
  </div>

  <div>
    <ProjectList :searchQuery="searchQuery" @selectProject="selectProject"></ProjectList>
  </div>
</template>

<script>
import ProjectLanding from '@/components/project/ProjectLanding.vue'
import ProjectCategories from '@/components/project/ProjectCategories.vue'
import ProjectList from '@/components/project/ProjectList.vue'
import ProjectFilter from "@/components/project/ProjectFilter.vue";

export default {
  name: 'ProjectMain',
  components: {ProjectFilter, ProjectList, ProjectCategories, ProjectLanding },
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
