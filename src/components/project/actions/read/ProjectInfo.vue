<template>
  <!--<ProjectViewTitle></ProjectViewTitle>-->
  <div v-if="project">
    <ProjectHeader :project="project" @closeProject="closeProject"></ProjectHeader>
    <ProjectDescription :project="project"></ProjectDescription>
    <ProjectApply :project="project"></ProjectApply>
    <ProjectCreator :project="project"></ProjectCreator>
  </div>
  <div v-else class="text-left">
    <p class="text-gray-500">Bitte wähle ein Projekt aus der Liste.</p>
  </div>
</template>

<script>
import ProjectHeader from '@/components/project/actions/read/details/ProjectHeader.vue'
import ProjectDescription from '@/components/project/actions/read/details/ProjectDescription.vue'
import ProjectApply from '@/components/project/actions/read/details/ProjectApply.vue'
import ProjectCreator from '@/components/project/actions/read/details/ProjectCreator.vue'

export default {
  name: 'ProjectInfo',
  components: {
    ProjectCreator,
    ProjectApply,
    ProjectDescription,
    ProjectHeader
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
