<template>
  <ProjectViewTitle></ProjectViewTitle>
  <div v-if="project">
    <ProjectActions :project="project" @closeProject="closeProject"></ProjectActions>
    <ProjectDetailsHeader :project="project"></ProjectDetailsHeader>
    <ProjectDetails :project="project"></ProjectDetails>
    <ProjectApply :project="project"></ProjectApply>
   </div>
  <div v-else class="text-left">
    <p class="text-gray-500">Bitte wähle ein Project aus der Liste aus.</p>
  </div>
</template>

<script>

import ProjectDetailsHeader from "@/components/project/details/ProjectDetailsHeader.vue";
import ProjectDetails from "@/components/project/details/ProjectDetails.vue";
import ProjectViewTitle from "@/components/project/ProjectViewTitle.vue";
import ProjectApply from "@/components/project/details/ProjectApply.vue";
import ProjectActions from "@/components/project/details/ProjectActions.vue";

export default {
  name: "ProjectInfo",
  components: {ProjectActions, ProjectApply, ProjectViewTitle, ProjectDetails, ProjectDetailsHeader},
  props: ['project'],
  data() {
    return {

    }
  },
  methods: {
    closeProject() {
      this.$emit("closeProject");
    }
  }
}
</script>

<style scoped>

</style>
