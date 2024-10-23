<template>
  <div v-if="project">
    <div class="p-4 bg-gray-50 shadow-lg mb-4 rounded-lg">
      <div class="flex flex-row items-center justify-between">
        <div class="inline-flex">
          <div
              v-for="(type, index) in project.projectTypes"
              :key="index"
              class="mb-4 px-4 py-2 bg-green-100 mr-2 rounded-lg"
          >
            {{ type }}
          </div>
        </div>
        <ProjectActions class="hidden" :project="project" @closeProject="closeProject"></ProjectActions>
      </div>
      <h2 class="text-2xl font-bold mb-1 ml-1">{{ project.projectTitle }}</h2>
      <p class="text-lg mb-4 ml-1">Untertitel</p>
      <ProjectDetails :project="project"></ProjectDetails>
    </div>
  </div>
</template>

<script>
import ProjectActions from '@/components/project/details/ProjectActions.vue'
import ProjectDetails from '@/components/project/details/ProjectDetails.vue'

export default {
  name: 'ProjectDetailsHeader',
  components: { ProjectDetails, ProjectActions },
  props: ['project'],
  methods: {
    closeProject() {
      this.$emit('closeProject')
    }
  }
}
</script>

<style scoped></style>
