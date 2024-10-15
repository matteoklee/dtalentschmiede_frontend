<template>
  <!--<ProjectViewTitle></ProjectViewTitle>-->
  <div v-if="project">
    <ProjectDetailsHeader :project="project" @closeProject="closeProject"></ProjectDetailsHeader>
    <ProjectDescription :project="project"></ProjectDescription>
    <ProjectApply :project="project"></ProjectApply>
    <ProjectCreator :project="project"></ProjectCreator>
  </div>
  <div v-else class="text-left">
    <p class="text-gray-500">Bitte wähle ein Projekt aus der Liste.</p>
  </div>
</template>

<script>
import ProjectDetailsHeader from '@/components/project/details/ProjectDetailsHeader.vue'
import ProjectDescription from '@/components/project/details/ProjectDescription.vue'
import ProjectApply from '@/components/project/details/ProjectApply.vue'
import ProjectCreator from '@/components/project/details/ProjectCreator.vue'

export default {
  name: 'ProjectInfo',
  components: {
    ProjectCreator,
    ProjectApply,
    ProjectDescription,
    ProjectDetailsHeader
  },
  props: ['project'],
  data() {
    return {}
  },
  methods: {
    closeProject() {
      this.$emit('closeProject')
    }
  }
}
</script>

<style scoped></style>
