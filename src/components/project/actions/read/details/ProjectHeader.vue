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
            {{ type.projectTypeName }}
          </div>
        </div>
      </div>
      <h2 class="text-2xl font-bold mb-1 ml-1">{{ project.projectTitle }}</h2>
      <p class="text-lg mb-4 ml-1"></p><!-- Untertitel -->
      <ProjectDetails :project="project"></ProjectDetails>
    </div>
  </div>
</template>

<script>
import ProjectDetails from '@/components/project/actions/read/details/ProjectDetails.vue';

export default {
  name: 'ProjectHeader',
  components: { ProjectDetails },
  props: ['project'],
  methods: {
  }
};
</script>

<style scoped></style>
