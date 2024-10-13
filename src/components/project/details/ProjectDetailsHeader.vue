<template>
  <div v-if="project">
    <div class="p-4 bg-white shadow-lg mb-4 rounded-lg">
      <div class="flex flex-row items-center justify-between">
        <div class="inline-flex">
          <div class="mb-2 px-4 py-2 bg-green-100 mr-1 rounded-lg mr-2">Projekt</div>
          <div class="mb-2 px-4 py-2 bg-green-100 mr-1 rounded-lg mr-2">Idee</div>
        </div>
        <ProjectActions :project="project" @closeProject="closeProject"></ProjectActions>
      </div>
      <h2 class="text-2xl font-bold mb-1">{{ project.title }}</h2>
      <p class="text-lg mb-4">{{ project.company }}</p>
      <ProjectDetails></ProjectDetails>
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
