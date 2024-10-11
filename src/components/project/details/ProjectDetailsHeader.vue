<template>
  <div v-if="project">
    <div class="p-4 bg-white shadow-lg mb-4">
      <div class="flex flex-row items-center justify-between">
        <h2 class="text-2xl font-bold mb-4">{{ project.title }}</h2>
        <ProjectActions :project="project" @closeProject="closeProject"></ProjectActions>
      </div>

      <p class="text-lg">{{ project.company }}</p>
      <p class="text-gray-600">{{ project.location }}</p>
    </div>
  </div>
</template>

<script>
import ProjectActions from "@/components/project/details/ProjectActions.vue";

export default {
  name: 'ProjectDetailsHeader',
  components: {ProjectActions},
  props: ['project'],
  methods: {
    closeProject() {
      this.$emit('closeProject')
    }
  }
}
</script>

<style scoped></style>
