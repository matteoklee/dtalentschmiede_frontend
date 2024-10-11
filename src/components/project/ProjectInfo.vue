<template>
  <!--<ProjectViewTitle></ProjectViewTitle>-->
  <div v-if="project">

    <ProjectDetailsHeader :project="project" @closeProject="closeProject"></ProjectDetailsHeader>
    <ProjectDetails :project="project"></ProjectDetails>
    <ProjectApply :project="project"></ProjectApply>
  </div>
  <div v-else class="text-left">
    <p class="text-gray-500">Bitte wähle ein Project aus der Liste aus.</p>
  </div>
</template>

<script>
import ProjectDetailsHeader from '@/components/project/details/ProjectDetailsHeader.vue'
import ProjectDetails from '@/components/project/details/ProjectDetails.vue'
import ProjectApply from '@/components/project/details/ProjectApply.vue'

export default {
  name: 'ProjectInfo',
  components: {
    ProjectApply,
    ProjectDetails,
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
