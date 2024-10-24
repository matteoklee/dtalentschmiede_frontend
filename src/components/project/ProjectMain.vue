<template>
  <div class="">
    <ProjectLanding></ProjectLanding>
  </div>
  <div>
    <ProjectCategories></ProjectCategories>
  </div>
  <div>
    <ProjectFilter></ProjectFilter>
  </div>

  <div>
    <ProjectList></ProjectList>
  </div>
</template>

<script>
import ProjectLanding from '@/components/project/ProjectLanding.vue'
import ProjectCategories from '@/components/project/ProjectCategories.vue'
import ProjectList from '@/components/project/ProjectList.vue'
import ProjectFilter from "@/components/project/ProjectFilter.vue";

export default {
  name: 'ProjectMain',
  components: {ProjectFilter, ProjectList, ProjectCategories, ProjectLanding },
  data() {
    return {
    }
  },
}
</script>

<style scoped></style>
