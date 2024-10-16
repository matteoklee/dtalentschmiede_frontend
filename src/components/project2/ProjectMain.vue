<template>
  <div class="">
    <ProjectLanding></ProjectLanding>
  </div>
  <div>
    <ProjectCategories></ProjectCategories>
  </div>
  <div>
    <ProjectList></ProjectList>
  </div>
</template>

<script>
import ProjectLanding from "@/components/project2/ProjectLanding.vue";
import ProjectCategories from "@/components/project2/ProjectCategories.vue";
import ProjectList from "@/components/project2/ProjectList.vue";

export default {
  name: "ProjectMain",
  components: {ProjectList, ProjectCategories, ProjectLanding}
}
</script>

<style scoped>

</style>
