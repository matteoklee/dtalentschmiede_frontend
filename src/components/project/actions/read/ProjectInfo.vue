<template>
  <!--<ProjectViewTitle></ProjectViewTitle>-->
  <div v-if="projectStore.selectedProject">
    <ProjectHeader :project="projectStore.selectedProject"></ProjectHeader>
    <ProjectDescription :project="projectStore.selectedProject"></ProjectDescription>
    <ProjectApply :project="projectStore.selectedProject"></ProjectApply>
    <ProjectCreator :project="projectStore.selectedProject"></ProjectCreator>
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

import {useProjectStore} from "@/stores/projectStore.js";
export default {
  name: 'ProjectInfo',
  setup() {
    const projectStore = useProjectStore();
    return {
      projectStore
    }
  },
  components: {
    ProjectCreator,
    ProjectApply,
    ProjectDescription,
    ProjectHeader
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
