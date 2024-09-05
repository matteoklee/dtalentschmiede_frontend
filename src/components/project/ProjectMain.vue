<template>
  <div class="flex lg:flex-row flex-col">
    <div
      class="lg:w-1/3 w-full border-r-2 border-gray-200 lg:max-h-[800px] max-h-[300px] overflow-auto"
    >
      <ProjectList @selectProject="selectProject"></ProjectList>
    </div>
    <div class="lg:w-2/3 w-full p-4 max-h-[800px] overflow-auto">
      <ProjectInfo :project="selectedProject" @closeProject="closeProject"></ProjectInfo>
    </div>
  </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList.vue'
import ProjectInfo from '@/components/project/ProjectInfo.vue'

export default {
  name: 'ProjectMain',
  components: { ProjectInfo, ProjectList },
  data() {
    return {
      selectedProject: null
    }
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project
    },
    closeProject() {
      this.selectedProject = null
    }
  }
}
</script>

<style scoped></style>
